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
   * Guest's email.
   */
  email: string;
  /**
   * Guest's first surname, max length is 150 characters.
   */
  first_surname: string;
  /**
   * Guest's last surname, max length is 150 characters.
   */
  last_surname: string;
  /**
   * Guest's name and middle name, max length is 150 characters.
   */
  name: string;
  /**
   * Guest's phone number, max length is 12 characters.
   */
  phone: string;
}

export type IReservationPayload = Partial<IReservationResource>;
