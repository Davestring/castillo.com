import { AxiosError } from 'axios';
import { Dispatch, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthResources, IBaseAuthentication } from 'services/resources';

import { Action, IAction } from '../helpers';

/**
 * Async function that will request to the API the authentication tokens.
 * @param {T} p - basic auth payload.
 */
export type IUseAuthFn<T> = (p: T) => Promise<void>;

export const useAuth = <T extends IBaseAuthentication>(
  dispatch: Dispatch<IAction>,
): IUseAuthFn<T> => {
  const { t } = useTranslation('errors');

  const navigate = useNavigate();

  const fn = useCallback(async (p: T) => {
    try {
      dispatch({ type: Action.AUTH });

      const { data } = await AuthResources.auth(p);

      localStorage.setItem('access', data?.access);

      dispatch({ access: data?.access, type: Action.AUTH_SUCCESS });

      navigate('/dashboard');
    } catch (err) {
      dispatch({ type: Action.AUTH_FAILURE });
      if ((err as AxiosError)?.response?.status === 401) {
        toast.dismiss();
        toast.error(t('api.auth.status-code.401'));
      }
    }
  }, []);

  return fn;
};
