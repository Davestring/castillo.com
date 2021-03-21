import _ from 'lodash';

const formatAddress = (address) => {
  const data = _.pick(address, [
    'street',
    'number',
    'colony',
    'zipCode',
    'municipality',
    'state',
  ]);

  return `${data.street} ${data.number} ${data.colony}, ${data.zipCode} ${data.municipality}, ${data.state}`;
};

export default formatAddress;
