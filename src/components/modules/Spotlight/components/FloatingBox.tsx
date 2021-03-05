import { Box } from '@chakra-ui/react';

import styled from '@emotion/styled';

const FloatingBox = styled(Box)`
  left: 50%;
  padding: 0 1rem;
  position: absolute;
  top: 85%;
  transform: translate(-50%, -100%);
  width: 100%;
`;

export default FloatingBox;
