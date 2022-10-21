import { IBaseResource } from 'services/services.types';

export interface IReservationResource extends IBaseResource {
  /**
   * Date when the guests will arrive to the facilities.
   */
  check_in: string;
  /**
   * Date when the guests will leave the facilities.
   */
  check_out: string;
  /**
   * Guest related to this booking.
   */
  guest: number;
}

export type IReservationPayload = Partial<IReservationResource>;
