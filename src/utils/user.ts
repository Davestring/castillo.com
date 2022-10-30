import fp from 'lodash/fp';

export const getFullname = fp.compose(
  fp.trim,
  fp.join(' '),
  fp.values,
  fp.omitBy(fp.isNil),
  fp.pick(['name', 'first_surname', 'last_surname']),
);
