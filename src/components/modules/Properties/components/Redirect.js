import { Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'next/link';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';

const Redirect = (props) => {
  const { id, ...rest } = props;
  const { t } = useTranslation('properties');

  return (
    <Link href={`/properties/${id}`} {...rest}>
      {t('properties.card.availability')}
    </Link>
  );
};

Redirect.propTypes = {
  id: PropTypes.number,
};

Redirect.defaultProps = {
  as: ReachLink,
  color: 'gold',
  fontSize: 'xs',
  sx: {
    '&:hover': {
      color: 'base',
    },
  },
};

export default Redirect;
