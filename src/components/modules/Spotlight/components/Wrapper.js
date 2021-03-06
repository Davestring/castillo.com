import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Wrapper = styled(Box)`
  left: 50%;
  padding: 0 ${({ theme }) => theme.space[4]};
  position: absolute;
  top: 85%;
  transform: translate(-50%, -50%);
  width: 100%;
`;

export default Wrapper;
