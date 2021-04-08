import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Banner = styled(Box)`
  background: white;
  box-shadow: ${({ theme }) => theme.shadows.md};
  height: ${({ theme }) => theme.space[16]};
  position: fixed;
  top: 0;
  transition: opacity 600ms, visibility 600ms;
  width: 100%;
  z-index: ${({ theme }) => theme.zIndices.overlay};

  -webkit-transition: opacity 600ms, visibility 600ms;
`;

export default Banner;
