import styled from '@emotion/styled';
import H1 from 'components/elements/H1';

const Heading = styled(H1)`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes['4xl']};
  font-weight: ${({ theme }) => theme.fontWeights.thin};
  letter-spacing: 10px;
  text-align: center;
  text-transform: uppercase;
  width: 100%;
`;

export default Heading;
