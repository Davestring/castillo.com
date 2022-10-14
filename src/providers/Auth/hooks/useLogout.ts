import { Dispatch, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { Action, IAction } from '../helpers';

/**
 * Async function that will close the user session and will remove the tokens
 * from the secure storage.
 */
export type IUseLogoutFn = () => Promise<void>;

export const useLogout = (dispatch: Dispatch<IAction>): IUseLogoutFn => {
  const navigate = useNavigate();

  const fn = useCallback(async () => {
    localStorage.removeItem('access');

    navigate('/login');

    dispatch({ type: Action.LOGOUT });
  }, []);

  return fn;
};
