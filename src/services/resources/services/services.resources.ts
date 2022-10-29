import {
  IFetchResponse,
  instance,
  IQueryParams,
  IResourcesObject,
  IResponse,
} from 'services';

import { IServicePayload, IServiceResource } from './services.types';

export const ServiceResources: IResourcesObject<IServiceResource> = {
  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/service/${id}/`),

  fetch: (p: IQueryParams): Promise<IFetchResponse<IServiceResource>> =>
    instance.get('/service/', { params: p }),

  patch: (
    id: number,
    params: IServicePayload,
  ): Promise<IResponse<IServiceResource>> =>
    instance.patch(`/service/${id}/`, params),

  post: (params: IServicePayload): Promise<IResponse<IServiceResource>> =>
    instance.post('/service/', params),
};
