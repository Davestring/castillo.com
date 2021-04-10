import { Icon, Stack, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { FaStar } from 'react-icons/fa';
import { formatPrice } from 'utils/format-utils';

function Info(props) {
  const { price, rating } = props;
  const { t } = useTranslation('properties');

  return (
    <Stack isInline align="center" justify="space-between" mb={4}>
      <Text fontSize="lg" fontWeight={700}>
        {t('properties.price', { price: formatPrice(price) })}
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

Info.propTypes = {
  price: PropTypes.number,
  rating: PropTypes.number,
};

Info.defaultProps = {
  price: 0,
  rating: 0,
};

export default Info;
