import { IFetchResponse, instance, IQueryParams, IResponse } from 'services';

import { IUserPayload, IUserResource } from './users.types';

export const UserResources = {
  create: (params: IUserPayload): Promise<IResponse<IUserResource>> =>
    instance.post('/user/', params),

  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/user/${id}/`),

  findAll: (p: IQueryParams): Promise<IFetchResponse<IUserResource>> =>
    instance.get('/user/', { params: p }),

  findByID: (id: number): Promise<IResponse<IUserResource>> =>
    instance.get(`/user/${id}`),

  me: (): Promise<IResponse<IUserResource>> => instance.get('/user/me'),

  update: (
    id: number,
    params: IUserPayload,
  ): Promise<IResponse<IUserResource>> =>
    instance.patch(`/user/${id}/`, params),
};
