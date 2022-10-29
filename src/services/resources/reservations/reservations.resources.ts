import {
  IFetchResponse,
  instance,
  IQueryParams,
  IResourcesObject,
  IResponse,
} from 'services';

import {
  IReservationPayload,
  IReservationResource,
} from './reservations.types';

export const ReservationResources: IResourcesObject<IReservationResource> = {
  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/booking/${id}/`),

  fetch: (p: IQueryParams): Promise<IFetchResponse<IReservationResource>> =>
    instance.get('/booking/', { params: p }),

  patch: (
    id: number,
    params: IReservationPayload,
  ): Promise<IResponse<IReservationResource>> =>
    instance.patch(`/booking/${id}/`, params),

  post: (
    params: IReservationPayload,
  ): Promise<IResponse<IReservationResource>> =>
    instance.post('/booking/', params),
};
