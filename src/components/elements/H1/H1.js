import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function H1(props) {
  const { children, ...rest } = props;
  return (
    <Heading as="h1" fontSize="2xl" mb={4} {...rest}>
      {children}
    </Heading>
  );
}

H1.propTypes = {
  children: PropTypes.elementType,
};

export default H1;
