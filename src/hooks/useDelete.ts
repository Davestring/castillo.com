import { useCallback, useEffect } from 'react';
import { useMutation, UseMutationResult } from 'react-query';
import { useLocation } from 'react-router-dom';
import { IDeletePayload, IResourcesObject, IResponse } from 'services';

type IMutationFnParams = { id: number; payload?: IDeletePayload };

type IMutation = UseMutationResult<
  IResponse<unknown>,
  unknown,
  IMutationFnParams,
  unknown
>;

export const useDelete = <T>(r: IResourcesObject<T>): IMutation => {
  const { pathname } = useLocation();

  const fn = useCallback(async ({ id, payload }: IMutationFnParams) => {
    const response = await r.delete(id, payload);
    return response;
  }, []);

  const mutation = useMutation(['delete', pathname], fn);

  useEffect(() => {
    // TODO: handle errors on [DELETE] requests.
    // eslint-disable-next-line no-console
    if (mutation?.isError) console.error(mutation?.error);
  }, [mutation?.isError]);

  return mutation;
};
