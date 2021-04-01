import _ from 'lodash';

export const formatAddress = (address) => {
  const data = _.pick(address, [
    'street',
    'number',
    'colony',
    'zipCode',
    'municipality',
    'state',
    'country',
  ]);

  return `${data.street} ${data.number} ${data.colony}, ${data.zipCode} ${data.municipality}, ${data.state}`;
};

export const formatAddressMin = (address) => {
  const { municipality, state, country } = address;

  return `${municipality}, ${state}, ${country}`;
};

export default formatAddress;
