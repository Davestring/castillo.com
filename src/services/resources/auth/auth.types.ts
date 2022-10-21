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
   * User email.
   */
  email: string;
  /**
   * User password.
   */
  password: string;
}

export interface IRefreshPayload {
  /**
   * Refresh token.
   */
  refresh: string;
}
