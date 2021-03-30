import { Box, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';
import ClampText from 'components/elements/ClampText';
import H1 from 'components/elements/H1';
import H2 from 'components/elements/H2';
import PropTypes from 'prop-types';

import Info from './Info';
import Redirect from './Redirect';

const Card = styled(Box)`
  box-shadow: ${({ theme }) => theme.shadows.md};
  display: flex;
  height: 380px;
  position: relative;
  transition: all 0.5s ease;

  &:hover {
    transform: scale(1.02);
  }

  :nth-of-type(even) {
    & > #info-card {
      background: ${({ theme }) => theme.colors.gold};
    }
  }

  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[12]};
  }
`;

function Property(props) {
  const { id, address, alt, cover, description, title, ...rest } = props;

  return (
    <Card {...rest}>
      {cover && (
        <Box maxH="380px" maxW="60%">
          <Image alt={alt} fit="cover" src={cover} h="100%" w="100%"></Image>
        </Box>
      )}
      <Box maxW="40%" pt={20} px={8}>
        <H1 fontWeight={400} letterSpacing="7.5px" mb={0}>
          Casa Castillo
        </H1>
        <H2 mb={2}>{title}</H2>
        <Redirect id={id}></Redirect>
      </Box>
      <Info id="info-card">
        <ClampText align="justify" clamp={3} color="white" fontSize="sm" mb={4}>
          {description}
        </ClampText>
        <Text align="end" color="white" fontSize="xs">
          {address}
        </Text>
      </Info>
    </Card>
  );
}

Property.propTypes = {
  id: PropTypes.number,
  address: PropTypes.string,
  alt: PropTypes.string,
  cover: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string,
};

Property.defaultProps = {
  alt: 'property-image',
};

export default Property;
