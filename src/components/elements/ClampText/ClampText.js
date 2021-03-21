import { Text as ChakraText } from '@chakra-ui/react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const Text = styled(ChakraText)`
  display: box;
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;

  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ clamp }) => clamp};
`;

function ClampText(props) {
  const { children, clamp, ...rest } = props;

  return <Text {...{ clamp, ...rest }}>{children}</Text>;
}

ClampText.propTypes = {
  children: PropTypes.node,
  clamp: PropTypes.number,
};

ClampText.defaultProps = {
  clamp: 1,
};

export default ClampText;
