import { IFetchResponse, instance, IQueryParams, IResponse } from 'services';

import {
  IReservationPayload,
  IReservationResource,
} from './reservations.types';

export const ReservationResources = {
  create: (params: IReservationPayload): IResponse<IReservationResource> =>
    instance.post('/booking/', params),

  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/booking/${id}/`),

  findAll: (p: IQueryParams): IFetchResponse<IReservationResource> =>
    instance.get('/booking/', { params: p }),

  findByID: (id: number): IResponse<IReservationResource> =>
    instance.get(`/booking/${id}`),

  update: (
    id: number,
    params: IReservationPayload,
  ): IResponse<IReservationResource> =>
    instance.patch(`/booking/${id}/`, params),
};
