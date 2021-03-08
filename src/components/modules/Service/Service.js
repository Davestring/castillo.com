import { Box, Flex, Image } from '@chakra-ui/react';
import Container from 'components/elements/Container';
import PropTypes from 'prop-types';

import Caption from './components/Caption';
import Summary from './components/Summary';
import Title from './components/Title';

function Service(props) {
  const { alt, caption, image, isReverse, summary, title, ...rest } = props;
  return (
    <Container maxWidth="900px" {...rest}>
      <Flex
        {...{
          align: 'center',
          justify: 'space-evenly',
          direction: { base: 'column', md: isReverse ? 'row-reverse' : 'row' },
        }}
      >
        {image && (
          <Image alt={alt} h="440px" objectFit="cover" src={image} w="330px" />
        )}

        <Box my={{ base: 4, md: 0 }} w="330px">
          <Caption>{caption}</Caption>
          <Title mb={2}>{title}</Title>
          <Summary>{summary}</Summary>
        </Box>
      </Flex>
    </Container>
  );
}

Service.propTypes = {
  alt: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  summary: PropTypes.string,
  title: PropTypes.string,
  isReverse: PropTypes.bool,
};

Service.defaultProps = {
  alt: 'service-image',
  image: 'https://fakeimg.pl/330x440/',
  isReverse: false,
};

export default Service;
