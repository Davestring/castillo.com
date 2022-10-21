import { IBaseResource } from 'services/services.types';

export interface IGuestResource extends IBaseResource {
  /**
   * Guest's email, should be unique.
   */
  email: string;
  /**
   * Guest's first surname, max length is 25 characters.
   */
  first_surname: string;
  /**
   * Guest's last surname, max length is 25 characters.
   */
  last_surname: string;
  /**
   * Guest's name and middle name, max length is 40 characters.
   */
  name: string;
  /**
   * Guest's phone number, max length is 12 characters.
   */
  phone: string;
}

export type IGuestPayload = Partial<IGuestResource>;
