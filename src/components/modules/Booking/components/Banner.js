import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Banner = styled(Box)`
  background: white;
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: ${({ theme }) => theme.space[16]};
  position: fixed;
  top: 0;
  transition: margin-top 0.6s;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.overlay};

  -webkit-transition: margin-top 0.6s;
`;

export default Banner;
