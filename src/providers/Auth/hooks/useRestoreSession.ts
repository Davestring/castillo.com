import { Dispatch, useCallback, useEffect } from 'react';
import { UserResources } from 'services/resources';

import { Action, IAction } from '../helpers';

export const useRestoreSession = (dispatch: Dispatch<IAction>): void => {
  const bootstrapAsync = useCallback(async () => {
    try {
      dispatch({ type: Action.RESTORE_SESSION });

      const access = localStorage.getItem('access');

      const { data: me } = await UserResources.me();

      dispatch({ access, me, type: Action.RESTORE_SESSION_SUCCESS });
    } catch (e) {
      dispatch({ type: Action.RESTORE_SESSION_FAILURE });
    }
  }, []);

  useEffect(() => {
    bootstrapAsync();
  }, [bootstrapAsync]);
};
