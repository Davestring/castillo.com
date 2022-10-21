import { IBaseResource } from 'services';

export interface IServiceResource extends IBaseResource {
  /**
   * Service description.
   */
  description: string;
  /**
   * Service name, max length is 128 and should be unique.
   */
  name: string;
}

export type IServicePayload = Partial<IServiceResource>;
