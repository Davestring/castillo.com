import { Flex } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const ResponsiveFlex = (props) => {
  const { children, ...rest } = props;
  return (
    <Flex direction={{ base: 'column', md: 'row' }} {...rest}>
      {children}
    </Flex>
  );
};

ResponsiveFlex.propTypes = {
  children: PropTypes.node,
};

export default ResponsiveFlex;
