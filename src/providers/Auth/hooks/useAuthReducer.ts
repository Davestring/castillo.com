import { Dispatch, useReducer } from 'react';

import {
  Action,
  BASE_FAILURE,
  BASE_INIT,
  BASE_SUCCESS,
  IAction,
  IMutationFn,
  INITIAL_STATE,
  IState,
} from '../helpers';

export const useAuthReducer = (): [IState, Dispatch<IAction>] => {
  const [state, dispatch] = useReducer<IMutationFn>((ps, a) => {
    switch (a?.type) {
      case Action.AUTH:
        return { ...ps, ...BASE_INIT };
      case Action.AUTH_FAILURE:
        return { ...ps, ...BASE_FAILURE };
      case Action.AUTH_SUCCESS:
        return { ...ps, ...BASE_SUCCESS, access: a?.access };

      case Action.LOGOUT:
        return { ...ps, ...INITIAL_STATE };

      case Action.RESTORE_SESSION:
        return { ...ps, ...BASE_INIT };
      case Action.RESTORE_SESSION_FAILURE:
        return { ...ps, ...BASE_FAILURE };
      case Action.RESTORE_SESSION_SUCCESS:
        return { ...ps, ...BASE_SUCCESS, access: a?.access };

      default:
        throw new Error(`Unknow action type: ${a?.type}`);
    }
  }, INITIAL_STATE as never);

  return [state, dispatch];
};
