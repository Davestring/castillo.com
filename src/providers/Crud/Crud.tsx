import { useDisclosure } from '@chakra-ui/react';
import { getCrudContext } from 'contexts';
import { FormikHelpers } from 'formik';
import { useDelete, useFetch, usePatch, usePost } from 'hooks';
import fp from 'lodash/fp';
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { IBaseResource, IResourcesObject } from 'services';

export interface ICrudProps<T = IBaseResource> {
  /**
   * Children opaque data structure.
   */
  children: ReactNode | ReactNode[];
  /**
   * Useful values for prepare a [POST] request.
   */
  defaultValues: Partial<T>;
  /**
   * Resource object with all the configuration to perform CRUD operations.
   */
  resources: IResourcesObject<T>;
}

export const Crud = <T extends IBaseResource>(
  props: ICrudProps<T>,
): JSX.Element => {
  const { children, defaultValues, resources: r } = props;

  const { data, isFetching, isLoading, isRefetching, refetch } = useFetch<T>(r);

  const { mutateAsync: mutateAsyncDelete } = useDelete<T>(r);

  const { mutateAsync: mutateAsyncPatch } = usePatch<T>(r);

  const { mutateAsync: mutateAsyncPost } = usePost<T>(r);

  const { isOpen, onClose, onOpen } = useDisclosure();

  const [resource, setResource] = useState<Partial<T>>(defaultValues);

  const [type, setType] = useState<'delete' | 'patch' | 'post' | null>(null);

  const prepareDelete = useCallback((v: T) => {
    setResource(v);
    setType('delete');
    onOpen();
  }, []);

  const preparePatch = useCallback((v: T) => {
    const payload = fp.omit(['created', 'updated'])(v);
    setResource(payload);
    setType('patch');
    onOpen();
  }, []);

  const preparePost = useCallback(() => {
    setType('post');
    onOpen();
  }, []);

  const onDelete = useCallback(async () => {
    await mutateAsyncDelete(resource?.id as number);
    onClose();
    await refetch();
    setResource(defaultValues);
    setType(null);
  }, [resource]);

  const onPatch = useCallback(
    async (payload: Partial<T>, h?: FormikHelpers<Partial<T>>) => {
      const { id, ...p } = payload;
      await mutateAsyncPatch({ id: id as number, payload: p as Partial<T> });
      onClose();
      await refetch();
      h?.resetForm();
      setResource(defaultValues);
      setType(null);
    },
    [],
  );

  const onPost = useCallback(
    async (payload: Partial<T>, h?: FormikHelpers<Partial<T>>) => {
      await mutateAsyncPost(payload);
      onClose();
      await refetch();
      h?.resetForm();
      setResource(defaultValues);
      setType(null);
    },
    [],
  );

  const context = useMemo(
    () => ({
      data,
      isFetching: isFetching || isLoading || isRefetching,
      isOpen,
      onClose,
      onDelete,
      onOpen,
      onPatch,
      onPost,
      prepareDelete,
      preparePatch,
      preparePost,
      resource,
      type,
    }),
    [data, isFetching, isLoading, isOpen, isRefetching, type],
  );

  const CrudContext = useMemo(() => getCrudContext<T>(), [getCrudContext]);

  return (
    <CrudContext.Provider value={context}>{children}</CrudContext.Provider>
  );
};
