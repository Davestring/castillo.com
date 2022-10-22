import { instance, IResponse } from 'services';

import {
  IAuthTokens,
  IBaseAuthentication,
  IRefreshPayload,
} from './auth.types';

export const AuthResources = {
  auth: (p: IBaseAuthentication): Promise<IResponse<IAuthTokens>> =>
    instance.post('/jwt/create', p),

  refresh: (p: IRefreshPayload): Promise<IResponse<IAuthTokens>> =>
    instance.post('/jwt/refresh', p),
};
