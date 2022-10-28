import { useCallback, useEffect } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import { useLocation } from 'react-router-dom';
import { IResourcesObject, IResponse } from 'services';

type IMutationFnParams<T> = { id: number; payload: Partial<T> };

type IMutation<T> = UseMutationResult<
  IResponse<T>,
  unknown,
  IMutationFnParams<T>,
  unknown
>;

export const usePatch = <T>(r: IResourcesObject<T>): IMutation<T> => {
  const { pathname } = useLocation();

  const fn = useCallback(async ({ id, payload }: IMutationFnParams<T>) => {
    const response = await r.update(id, payload);
    return response;
  }, []);

  const mutation = useMutation(['patch', pathname], fn);

  useEffect(() => {
    // TODO: handle errors on [PATCH] requests.
    // eslint-disable-next-line no-console
    console.error(mutation?.error);
  }, [mutation?.isError]);

  return mutation;
};
