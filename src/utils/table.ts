import fp from 'lodash/fp';

/**
 * I18n keys for all the tables headers.
 * @type {{ [k: string]: string }}
 */
export const TABLE_HEADERS = {
  created: 'table.header.created',
  description: 'table.header.description',
  email: 'table.header.email',
  id: 'table.header.id',
  isStaff: 'table.header.is-staff',
  name: 'table.header.name',
  updated: 'table.header.updated',
};

/**
 * Array of headers that will be displayed on the service listing.
 * @type {string[]}
 */
export const SERVICES_TABLE_HEADERS: string[] = fp.compose(
  fp.values,
  fp.pick(['id', 'name', 'updated', 'created']),
)(TABLE_HEADERS);

/**
 * Array of headers that will be displayed on the user listing.
 * @type {string[]}
 */
export const USERS_TABLE_HEADERS: string[] = fp.compose(
  fp.values,
  fp.pick(['id', 'email', 'name', 'updated', 'created']),
)(TABLE_HEADERS);
