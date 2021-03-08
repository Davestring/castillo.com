import { Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SubHeading = styled(Text)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.thin};
  letter-spacing: 5px;
  text-align: center;
  width: 100%;
`;

export default SubHeading;
