import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Caption from './Caption';
import Summary from './Summary';
import Title from './Title';

function Insight(props) {
  const { alt, caption, image, isReverse, summary, title, ...rest } = props;

  return (
    <Flex
      {...{
        align: 'center',
        justify: 'space-evenly',
        direction: { base: 'column', md: isReverse ? 'row-reverse' : 'row' },
        ...rest,
      }}
    >
      {image && (
        <Image alt={alt} height={440} layout="fixed" src={image} width={330} />
      )}

      <Box my={{ base: 4, md: 0 }} w="330px">
        {caption && <Caption>{caption}</Caption>}
        {title && <Title mb={2}>{title}</Title>}
        {summary && <Summary>{summary}</Summary>}
      </Box>
    </Flex>
  );
}

Insight.propTypes = {
  alt: PropTypes.string,
  caption: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  isReverse: PropTypes.bool,
  summary: PropTypes.string,
  title: PropTypes.string,
};

Insight.defaultProps = {
  alt: 'insight-image',
  isReverse: false,
};

export default Insight;
