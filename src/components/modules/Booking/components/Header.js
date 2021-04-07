import { Icon, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { formatPrice } from 'utils/format-utils';

function Header(props) {
  const { price, rating } = props;
  return (
    <Stack isInline align="center" justify="space-between" mb={4}>
      <Text fontSize="lg" fontWeight={700}>
        {formatPrice(price)}
      </Text>
      <Stack isInline align="center" spacing={1}>
        <Icon as={FaStar} color="gold" h={4} mt="-4px" w={4}></Icon>
        <Text as="span" fontSize="sm">
          {rating}
        </Text>
      </Stack>
    </Stack>
  );
}

Header.propTypes = {
  price: PropTypes.number,
  rating: PropTypes.number,
};

Header.defaultProps = {
  price: 0,
  rating: 0,
};

export default Header;
