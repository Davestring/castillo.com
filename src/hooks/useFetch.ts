import { useQuery, UseQueryResult } from 'react-query';
import { useLocation } from 'react-router-dom';
import { IPagination, IQueryParams, IResourcesObject } from 'services';

type IQuery<T> = UseQueryResult<IPagination<T>, unknown>;

export const useFetch = <T>(
  r: IResourcesObject<T>,
  p: IQueryParams = {},
): IQuery<T> => {
  const { pathname } = useLocation();

  const query = useQuery(['fetch-all', pathname], async () => {
    const response = await r.findAll(p);
    return response?.data;
  });

  return query;
};
