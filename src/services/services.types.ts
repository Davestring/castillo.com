import { AxiosResponse } from 'axios';

/**
 * Generic axios response object.
 */
export type IResponse<T> = AxiosResponse<T>;

export interface IPagination<T> {
  /**
   * Total number of registries stored in the database.
   */
  count: number;
  /**
   * Next paginated URL.
   */
  next: null | string;
  /**
   * Previous paginated URL.
   */
  previous: null | string;
  /**
   * Resource listing results.
   */
  results: T[];
}

export interface IPaginationParams {
  /**
   * Current page, by default is 1.
   */
  page?: number | string;
  /**
   * A numeric value indicating the page size, by default is 20 items per
   * request and its setted on the backend side.
   */
  page_size?: number | string;
}

export interface IOrderingParams {
  /**
   * Ordering query parameter, for the API the valid values are `id` or `name`
   * for ascending sorting and `-id` or `-name` for descending sorting this
   * filter is based on the `id` and `name` attributes of the resources.
   */
  ordering?: string;
}

export interface IFilterParams {
  /**
   * Retrieve items based on its `is_active` attribute, the accepted values can
   * be `true` and `false` or `1` and `0`.
   */
  is_active?: boolean | number;
  /**
   * Retrieve items based in its `name` attribute, this param is for an exact
   * match.
   */
  name?: string;
  /**
   * Retrieve items based in its `name` attribute, this param is for a non-exact
   * match.
   */
  name__contains?: string;
}

export type IQueryParams = IPaginationParams & IOrderingParams & IFilterParams;

export interface IBaseResource {
  /**
   * Created date in a fixed-precision format.
   */
  created: string;
  /**
   * Registry unique identifier.
   */
  id: number;
  /**
   * If `true`, the registry will be active and can be used as Foreign Key
   */
  is_active: boolean;
  /**
   * Updated date in a fixed-precision format.
   */
  updated: string;
}

/**
 * Casa Castillo API [GET] response structure wrapped on a axios response
 * object.
 */
export type IFetchResponse<T> = IResponse<IPagination<T>>;

export interface IResourcesObject<T> {
  /**
   * Makes an HTTP POST request for the given resource.
   * @params {Partial<T>} p - resource payload.
   *
   * @returns {IResponse<T>}
   */
  create: (p: Partial<T>) => Promise<IResponse<T>>;
  /**
   * Makes an HTTP GET request for the given resource.
   * @params {IQueryParams} p - query params for filter and order the results.
   *
   * @returns {IFetchResponse<T>}
   */
  findAll: (p: IQueryParams) => Promise<IFetchResponse<T>>;
  /**
   * Makes an HTTP PATCH request for the given resource.
   * @params {number} id - resource unique identifier.
   * @params {Partial<T>} p - resource payload.
   *
   * @returns {IResponse<T>}
   */
  update: (id: number, p: Partial<T>) => Promise<IResponse<T>>;
}
