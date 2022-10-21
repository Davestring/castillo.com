import { IBaseResource } from 'services/services.types';

import { IGuestPayload } from '../guests';

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
  guest: IGuestPayload;
}

export type IReservationPayload = Partial<IReservationResource>;
