import { IAuthContextProps } from 'contexts';

/**
 * Enum for authentication reducer actions.
 * @readonly
 * @enum {string}
 */
export enum Action {
  AUTH = 'AUTH',
  AUTH_FAILURE = 'AUTH_FAILURE',
  AUTH_SUCCESS = 'AUTH_SUCCESS',

  LOGOUT = 'LOGOUT',

  RESTORE_SESSION = 'RESTORE_SESSION',
  RESTORE_SESSION_FAILURE = 'RESTORE_SESSION_FAILURE',
  RESTORE_SESSION_SUCCESS = 'RESTORE_SESSION_SUCCESS',
}

export type IState = Pick<
  IAuthContextProps,
  'access' | 'isError' | 'isLoading'
>;

export interface IAction extends IState {
  /**
   * Action type identifier.
   */
  type: keyof typeof Action;
}

/**
 * Function that will mutate the reducer state.
 * @param {IState} ps - previous state.
 * @param {IAction} a - reducer action handler.
 */
export type IMutationFn = (ps: IState, a: IAction) => void;

export const INITIAL_STATE: IState = {
  access: null,
  isError: false,
  isLoading: true,
};

export const BASE_INIT = { isError: false, isLoading: true };

export const BASE_SUCCESS = { isError: false, isLoading: false };

export const BASE_FAILURE = { isError: true, isLoading: false };
