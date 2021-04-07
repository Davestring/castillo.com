import { Box } from '@chakra-ui/react';
import styled from '@emotion/styled';

const Card = styled(Box)`
  border: 1px;
  border-color: ${({ theme }) => theme.colors.blackAlpha[200]};
  border-radius: ${({ theme }) => theme.radii.md};
  box-shadow: ${({ theme }) => theme.shadows.md};
  max-height: ${({ theme }) => theme.sizes['2xs']};
  margin-left: ${({ theme }) => theme.space[12]};
  padding: ${({ theme }) => theme.space[8]};
  position: sticky;
  top: ${({ theme }) => theme.space[20]};
`;

export default Card;
