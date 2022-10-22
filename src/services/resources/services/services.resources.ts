import { IFetchResponse, instance, IQueryParams, IResponse } from 'services';

import { IServicePayload, IServiceResource } from './services.types';

export const ServiceResources = {
  create: (params: IServicePayload): Promise<IResponse<IServiceResource>> =>
    instance.post('/service/', params),

  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/service/${id}/`),

  findAll: (p: IQueryParams): Promise<IFetchResponse<IServiceResource>> =>
    instance.get('/service/', { params: p }),

  findByID: (id: number): Promise<IResponse<IServiceResource>> =>
    instance.get(`/service/${id}`),

  update: (
    id: number,
    params: IServicePayload,
  ): Promise<IResponse<IServiceResource>> =>
    instance.patch(`/service/${id}/`, params),
};
