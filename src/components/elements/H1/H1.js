import { Heading } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function H1(props) {
  const { children, ...rest } = props;
  return (
    <Heading as="h1" {...rest}>
      {children}
    </Heading>
  );
}

H1.propTypes = {
  children: PropTypes.node,
};

H1.defaultProps = {
  fontSize: '4xl',
  fontWeight: 200,
  letterSpacing: '10px',
  mb: 4,
  textTransform: 'uppercase',
};

export default H1;
