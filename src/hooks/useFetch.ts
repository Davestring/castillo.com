import { useQuery, UseQueryResult } from 'react-query';
import { useLocation } from 'react-router-dom';
import { IFetchResponse, IPagination, IQueryParams } from 'services';

export interface IResource<T> {
  /**
   * Makes an HTTP GET request for the given resource.
   * @params {IQueryParams} p - query params for filter and order the results.
   *
   * @returns {IFetchResponse<T>}
   */
  findAll: (p: IQueryParams) => IFetchResponse<T>;
}

export type IRes<T> = UseQueryResult<IPagination<T>, unknown>;

export const useFetch = <T>(r: IResource<T>, p: IQueryParams = {}): IRes<T> => {
  const { pathname } = useLocation();

  const query = useQuery(['fetch-all', pathname], async () => {
    const response = await r.findAll(p);
    return response?.data;
  });

  return query;
};
