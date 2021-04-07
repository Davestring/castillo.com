import { Icon, Stack, Text } from '@chakra-ui/react';
import Calendar from 'components/collections/Calendar';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';

import Card from './components/Card';

function Booking(props) {
  const { price, rating, ...rest } = props;
  return (
    <Card d={{ base: 'none', lg: 'block' }} {...rest}>
      <Stack isInline align="center" justify="space-between" mb={4}>
        <Text fontSize="lg" fontWeight={700}>
          ${price} MXN
        </Text>
        <Stack isInline align="center" spacing={1}>
          <Icon as={FaStar} color="gold" h={4} mt="-4px" w={4}></Icon>
          <Text as="span" fontSize="sm">
            {rating}
          </Text>
        </Stack>
      </Stack>
      <Calendar></Calendar>
    </Card>
  );
}

Booking.propTypes = {
  price: PropTypes.number,
  rating: PropTypes.number,
};

Booking.defaultProps = {
  price: 0,
  rating: 0,
};

export default Booking;
