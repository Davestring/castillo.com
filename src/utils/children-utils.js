import _ from 'lodash';
import { Children } from 'react';

export const someByType = (children, type) =>
  _.some(Children.toArray(children), { type });

export const findByType = (children, type) =>
  _.find(Children.toArray(children), { type });

export const isNil = (children) =>
  children === null ||
  children === undefined ||
  (Array.isArray(children) && children.length === 0);
