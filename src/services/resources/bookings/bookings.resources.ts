import {
  IFetchResponse,
  instance,
  IQueryParams,
  IResourcesObject,
  IResponse,
} from 'services';

import { IBookingPayload, IBookingResource } from './bookings.types';

export const BookingResources: IResourcesObject<IBookingResource> = {
  delete: (id: number): Promise<IResponse<unknown>> =>
    instance.delete(`/booking/${id}/`),

  fetch: (p: IQueryParams): Promise<IFetchResponse<IBookingResource>> =>
    instance.get('/booking/', { params: p }),

  patch: (
    id: number,
    params: IBookingPayload,
  ): Promise<IResponse<IBookingResource>> =>
    instance.patch(`/booking/${id}/`, params),

  post: (params: IBookingPayload): Promise<IResponse<IBookingResource>> =>
    instance.post('/booking/', params),
};
