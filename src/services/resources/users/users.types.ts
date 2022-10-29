import { IBaseResource } from 'services';

export interface IUserResource extends IBaseResource {
  /**
   * User's email, should be unique.
   */
  email: string;
  /**
   * User's first surname, max length is 150 characters.
   */
  first_surname: string;
  /**
   * Designates whether this user should be treated as active. Unselect this
   * instead of deleting accounts.
   */
  is_active: boolean;
  /**
   * Designates whether the user can log into this admin site.
   */
  is_staff: boolean;
  /**
   * Designates that this user has all permissions without explicitly assigning
   * them.
   */
  is_superuser: boolean;
  /**
   * User's last surname, max length is 150 characters.
   */
  last_surname: string;
  /**
   * User's name, max length is 150 characters.
   */
  name: string;
}

export type IUserPayload = Partial<IUserResource>;
