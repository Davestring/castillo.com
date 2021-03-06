import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function Divider(props) {
  const { centered, ...rest } = props;
  return (
    <Box
      {...{
        ...(centered && { mx: 'auto' }),
        ...rest,
      }}
    />
  );
}

Divider.propTypes = {
  centered: PropTypes.bool,
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Divider.defaultProps = {
  centered: true,
  height: '1.5px',
  width: 10,
};

export default Divider;
