import { createContext } from 'react';
import { IBaseAuthentication } from 'services/resources';

export interface IAuthProps {
  /**
   * Authenticated user access token.
   */
  access?: null | string;
  /**
   * Async function that will request to the API for the authentication tokens.
   * @param {IBaseAuthentication} p - auth payload.
   */
  authFn: (p: IBaseAuthentication) => Promise<void>;
  /**
   * If `true`, the context will change to an error state.
   */
  isError?: boolean;
  /**
   * If `true`, the context will change to a loading state.
   */
  isLoading?: boolean;
  /**
   * Async function that will close the user session and will remove the tokens
   * from the secure storage.
   */
  logoutFn: () => Promise<void>;
}

export const Auth = createContext({} as IAuthProps);
