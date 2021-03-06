import { Box, Flex, Image } from '@chakra-ui/react';
import Container from 'components/elements/Container';
import PropTypes from 'prop-types';

import Caption from './components/Caption';
import Summary from './components/Summary';
import Title from './components/Title';

function ServiceCard(props) {
  const { alt, caption, image, summary, title, flex, ...rest } = props;
  return (
    <Container maxWidth="900px" {...rest}>
      <Flex {...{ align: 'center', justify: 'space-evenly', ...flex }}>
        {image && <Image alt={alt} h="440px" src={image} w="330px" />}
        <Box w="330px">
          <Caption>{caption}</Caption>
          <Title>{title}</Title>
          <Summary>{summary}</Summary>
        </Box>
      </Flex>
    </Container>
  );
}

ServiceCard.propTypes = {
  alt: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  summary: PropTypes.string,
  title: PropTypes.string,
  flex: PropTypes.shape({}),
};

ServiceCard.defaultProps = {
  alt: 'service-image',
  image: 'https://fakeimg.pl/330x440/',
};

export default ServiceCard;
