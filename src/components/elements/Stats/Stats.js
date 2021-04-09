import { Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaBath, FaBed, FaUserFriends } from 'react-icons/fa';

import Stat from './components/Stat';

function Stats(props) {
  const { bathrooms, beds, guests, ...rest } = props;
  return (
    <Stack {...rest}>
      <Stat icon={FaUserFriends} stat={guests}></Stat>
      <Stat icon={FaBed} stat={beds}></Stat>
      <Stat icon={FaBath} stat={bathrooms}></Stat>
    </Stack>
  );
}

Stats.propTypes = {
  bathrooms: PropTypes.number,
  beds: PropTypes.number,
  guests: PropTypes.number,
};

Stats.defaultProps = {
  align: 'center',
  bathrooms: 0,
  beds: 0,
  isInline: true,
  guests: 0,
  spacing: 1,
};

export default Stats;
