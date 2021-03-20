import { Text } from '@chakra-ui/react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function Caption(props) {
  const { children, ...rest } = props;

  if (_.isNil(children)) return null;
  return <Text {...rest}>{children}</Text>;
}

Caption.propTypes = {
  children: PropTypes.node,
};

Caption.defaultProps = {
  fontFamily: 'Garamond',
  fontSize: 'lg',
  fontStyle: 'italic',
  fontWeight: 200,
  textAlign: 'center',
};

export default Caption;
