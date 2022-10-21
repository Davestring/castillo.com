import { IFetchResponse, instance, IQueryParams, IResponse } from 'services';

import { IServicePayload, IServiceResource } from './services.types';

export const ServiceResources = {
  create: (params: IServicePayload): IResponse<IServiceResource> =>
    instance.post('/service/', params),

  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/service/${id}/`),

  findAll: (p: IQueryParams): IFetchResponse<IServiceResource> =>
    instance.get('/service/', { params: p }),

  findByID: (id: number): IResponse<IServiceResource> =>
    instance.get(`/service/${id}`),

  update: (id: number, params: IServicePayload): IResponse<IServiceResource> =>
    instance.patch(`/service/${id}/`, params),
};
