import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Container(props) {
  const { children, isFluid, ...rest } = props;
  return (
    <Box
      {...{
        marginX: 'auto',
        maxWidth: '1200px',
        paddingX: 4,
        position: 'relative',
        width: '100%',
        ...(isFluid && { maxWidth: '100%', paddingX: 0 }),
        ...rest,
      }}
    >
      {children}
    </Box>
  );
}

Container.propTypes = {
  children: PropTypes.node,
  isFluid: PropTypes.bool,
};

Container.defaultProps = {
  isFluid: false,
};

export default Container;
