import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function H2(props) {
  const { children, ...rest } = props;
  return (
    <Heading
      as="h2"
      fontSize="2xl"
      fontWeight={200}
      letterSpacing="5px"
      mb={4}
      textTransform="uppercase"
      {...rest}
    >
      {children}
    </Heading>
  );
}

H2.propTypes = {
  children: PropTypes.node,
};

export default H2;
