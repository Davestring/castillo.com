import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const Info = (props) => {
  const { children, ...rest } = props;

  return <Box {...rest}>{children}</Box>;
};

Info.propTypes = {
  children: PropTypes.node,
};

Info.defaultProps = {
  background: 'base',
  bottom: 0,
  padding: 10,
  position: 'absolute',
  right: 0,
  width: '55%',
};

export default Info;
