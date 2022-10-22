import { IFetchResponse, instance, IQueryParams, IResponse } from 'services';

import { IUserPayload, IUserResource } from './users.types';

export const UserResources = {
  create: (params: IUserPayload): IResponse<IUserResource> =>
    instance.post('/user/', params),

  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/user/${id}/`),

  findAll: (p: IQueryParams): IFetchResponse<IUserResource> =>
    instance.get('/user/', { params: p }),

  findByID: (id: number): IResponse<IUserResource> =>
    instance.get(`/user/${id}`),

  me: (): IResponse<IUserResource> => instance.get('/user/me'),

  update: (id: number, params: IUserPayload): IResponse<IUserResource> =>
    instance.patch(`/user/${id}/`, params),
};
