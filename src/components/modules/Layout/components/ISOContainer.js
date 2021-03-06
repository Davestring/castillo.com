import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const ISOContainer = styled(Box)`
  height: auto;
  margin-top: ${({ theme }) => theme.space[16]};
  position: relative;
`;

export default ISOContainer;
