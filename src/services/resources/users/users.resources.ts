import {
  IFetchResponse,
  instance,
  IQueryParams,
  IResourcesObject,
  IResponse,
} from 'services';

import { IUserPayload, IUserResource } from './users.types';

type IMeResource = { me: () => Promise<IResponse<IUserResource>> };

export const UserResources: IResourcesObject<IUserResource> & IMeResource = {
  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/user/${id}/`),

  fetch: (p: IQueryParams): Promise<IFetchResponse<IUserResource>> =>
    instance.get('/user/', { params: p }),

  me: (): Promise<IResponse<IUserResource>> => instance.get('/user/me'),

  patch: (
    id: number,
    params: IUserPayload,
  ): Promise<IResponse<IUserResource>> =>
    instance.patch(`/user/${id}/`, params),

  post: (params: IUserPayload): Promise<IResponse<IUserResource>> =>
    instance.post('/user/', params),
};
