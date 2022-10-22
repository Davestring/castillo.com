import { IFetchResponse, instance, IQueryParams, IResponse } from 'services';

import {
  IReservationPayload,
  IReservationResource,
} from './reservations.types';

export const ReservationResources = {
  create: (
    params: IReservationPayload,
  ): Promise<IResponse<IReservationResource>> =>
    instance.post('/booking/', params),

  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/booking/${id}/`),

  findAll: (p: IQueryParams): Promise<IFetchResponse<IReservationResource>> =>
    instance.get('/booking/', { params: p }),

  findByID: (id: number): Promise<IResponse<IReservationResource>> =>
    instance.get(`/booking/${id}`),

  update: (
    id: number,
    params: IReservationPayload,
  ): Promise<IResponse<IReservationResource>> =>
    instance.patch(`/booking/${id}/`, params),
};
