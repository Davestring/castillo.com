import { Link as ChakraLink } from '@chakra-ui/react';
import styled from '@emotion/styled';
import { Link as ReachLink } from 'next/link';
import PropTypes from 'prop-types';

const Link = styled(ChakraLink)`
  &:hover {
    color: ${({ theme }) => theme.colors.base};
  }
`;

const Redirect = (props) => {
  const { id, ...rest } = props;
  return (
    <Link href={`/properties/${id}`} {...rest}>
      Ver disponibilidad
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
};

export default Redirect;
