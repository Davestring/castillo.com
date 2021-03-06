import { Text } from '@chakra-ui/react';
import Divider from 'components/elements/Divider';
import _ from 'lodash';
import PropTypes from 'prop-types';

function Title(props) {
  const { children, ...rest } = props;

  if (_.isNil(children)) return null;
  return (
    <>
      <Text {...rest}>{children}</Text>
      <Divider bg="black" mb={2}></Divider>
    </>
  );
}

Title.propTypes = {
  children: PropTypes.elementType,
};

Title.defaultProps = {
  fontFamily: 'Helvetica Neue',
  fontSize: 'md',
  fontStyle: 'normal',
  fontWeight: 700,
  textAlign: 'center',
  transform: 'uppercase',
};

export default Title;
