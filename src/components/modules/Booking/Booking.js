import { Box, Button } from '@chakra-ui/react';
import Calendar from 'components/collections/Calendar';
import PropTypes from 'prop-types';

import Card from './components/Card';
import Header from './components/Header';

function Booking(props) {
  const { price, rating, ...rest } = props;
  return (
    <Card d={{ base: 'none', lg: 'flex' }} {...rest}>
      <Box>
        <Header price={price} rating={rating}></Header>
        <Calendar></Calendar>
      </Box>
      <Button colorScheme="golden">Reserva</Button>
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
