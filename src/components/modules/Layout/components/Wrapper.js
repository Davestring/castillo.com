import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Wrapper = styled(Box)`
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;

  a {
    text-decoration: none !important;
  }
`;

export default Wrapper;
