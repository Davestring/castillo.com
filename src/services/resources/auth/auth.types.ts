export interface IAuthTokens {
  /**
   * Access token.
   */
  access: string;
  /**
   * Refresh token.
   */
  refresh: string;
}

export interface IBaseAuthentication {
  /**
   * User password.
   */
  password: string;
  /**
   * User email.
   */
  email: string;
}

export interface IRefreshPayload {
  /**
   * Refresh token.
   */
  refresh: string;
}
