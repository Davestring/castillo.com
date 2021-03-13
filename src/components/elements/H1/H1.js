import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function H1(props) {
  const { children, ...rest } = props;
  return (
    <Heading
      as="h1"
      fontSize="4xl"
      fontWeight={200}
      letterSpacing="10px"
      mb={4}
      textTransform="uppercase"
      {...rest}
    >
      {children}
    </Heading>
  );
}

H1.propTypes = {
  children: PropTypes.node,
};

export default H1;
