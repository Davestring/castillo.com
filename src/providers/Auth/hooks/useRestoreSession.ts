import { Dispatch, useCallback, useEffect } from 'react';

import { Action, IAction } from '../helpers';

export const useRestoreSession = (dispatch: Dispatch<IAction>): void => {
  const bootstrapAsync = useCallback(async () => {
    try {
      dispatch({ type: Action.RESTORE_SESSION });

      const access = localStorage.getItem('access');

      dispatch({ access, type: Action.RESTORE_SESSION_SUCCESS });
    } catch (e) {
      dispatch({ type: Action.RESTORE_SESSION_FAILURE });
    }
  }, []);

  useEffect(() => {
    bootstrapAsync();
  }, [bootstrapAsync]);
};
