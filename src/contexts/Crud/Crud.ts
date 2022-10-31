import { FormikHelpers } from 'formik';
import { once } from 'lodash/fp';
import { createContext, useContext } from 'react';
import { IBaseResource, IDeletePayload, IPagination } from 'services';

export interface ICrudProps<T = IBaseResource> {
  /**
   * [GET] query result.
   */
  data: IPagination<T> | undefined;
  /**
   * If `true`, then the provider is making a [GET] query.
   */
  isFetching: boolean;
  /**
   * If `true`, the CRUD disclosure will be open.
   */
  isOpen: boolean;
  /**
   * Some endpoints use the authenticated user password in order to delete
   * sensitive data, in that case, this prop will restrict the delete action.
   */
  isProtected: boolean;
  /**
   * Action triggered to change the `isOpen` value to `false`.
   */
  onClose: VoidFunction;
  /**
   * Action triggered to change the `isOpen` value to `true`.
   */
  onOpen: VoidFunction;
  /**
   * Performs a [DELETE] HTTP request to the API.
   * @params {IDeletePayload} p - some endpoints use the authenticated user
   * password in order to delete sensitive data, this value is optional.
   */
  onDelete: (p?: IDeletePayload, h?: FormikHelpers<IDeletePayload>) => void;
  /**
   * Performs a [PATCH] HTTP request to the API.
   */
  onPatch: (p: Partial<T>, h?: FormikHelpers<Partial<T>>) => void;
  /**
   * Performs a [POST] HTTP request to the API.
   */
  onPost: (p: Partial<T>, h?: FormikHelpers<Partial<T>>) => void;
  /**
   * Prepares the provider for a [DELETE] request.
   */
  prepareDelete: (v: T) => void;
  /**
   * Prepares the provider for a [PATCH] request.
   */
  preparePatch: (v: T) => void;
  /**
   * Prepares the provider for a [POST] request.
   */
  preparePost: VoidFunction;
  /**
   * This value will be set from `null` to `Partial<T>` when the provider
   * prepares a [DELETE], [PATCH] or [POST] request.
   */
  registry: Partial<T>;
  /**
   * Current HTTP action.
   */
  type: 'delete' | 'patch' | 'post' | null;
}

export const getCrud = once(
  <T>(): React.Context<ICrudProps<T>> => createContext({} as ICrudProps<T>),
);

export const useCrud = <T>(): ICrudProps<T> => useContext(getCrud<T>());
