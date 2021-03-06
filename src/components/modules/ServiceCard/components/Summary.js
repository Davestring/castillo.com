import { Text } from '@chakra-ui/react';
import _ from 'lodash';
import PropTypes from 'prop-types';

function Summary(props) {
  const { children, ...rest } = props;

  if (_.isNil(children)) return null;
  return <Text {...rest}>{children}</Text>;
}

Summary.propTypes = {
  children: PropTypes.elementType,
};

Summary.defaultProps = {
  fontFamily: 'Helvetica Neue',
  fontSize: 'sm',
  fontStyle: 'normal',
  fontWeight: 200,
  textAlign: 'center',
};

export default Summary;
