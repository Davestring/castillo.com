import { useEffect } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { IUserResource, UserResources } from 'services/resources';

export const useFetchMe = (): UseQueryResult<IUserResource, unknown> => {
  const query = useQuery('fetch-me', async () => {
    const { data: me } = await UserResources.me();
    return me;
  });

  useEffect(() => {
    // TODO: handle errors.
    // eslint-disable-next-line no-console
    if (query?.isError) console.error(query?.error);
  }, [query?.isError]);

  return query;
};
