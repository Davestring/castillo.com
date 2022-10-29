import { useCallback, useEffect } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import { useLocation } from 'react-router-dom';
import { IResourcesObject, IResponse } from 'services';

type IMutation<T> = UseMutationResult<
  IResponse<T>,
  unknown,
  Partial<T>,
  unknown
>;

export const usePost = <T>(r: IResourcesObject<T>): IMutation<T> => {
  const { pathname } = useLocation();

  const fn = useCallback(async (p: Partial<T>) => {
    const response = await r.create(p);
    return response;
  }, []);

  const mutation = useMutation(['post', pathname], fn);

  useEffect(() => {
    // TODO: handle errors on [POST] requests.
    // eslint-disable-next-line no-console
    if (mutation?.isError) console.error(mutation?.error);
  }, [mutation?.isError]);

  return mutation;
};
