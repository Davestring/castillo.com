import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function H2(props) {
  const { children, ...rest } = props;
  return (
    <Heading as="h2" fontSize="xl" mb={4} {...rest}>
      {children}
    </Heading>
  );
}

H2.propTypes = {
  children: PropTypes.elementType,
};

export default H2;
