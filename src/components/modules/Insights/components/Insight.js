import { Box, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import PropTypes from 'prop-types';

import Caption from './Caption';
import Summary from './Summary';
import Title from './Title';

const Card = styled(Flex)`
  :not(:last-child) {
    margin-bottom: ${({ theme }) => theme.space[12]};
  }
`;

function Insight(props) {
  const { alt, caption, image, isReverse, summary, title, ...rest } = props;

  return (
    <Card
      {...{
        align: 'center',
        justify: 'space-evenly',
        direction: { base: 'column', md: isReverse ? 'row-reverse' : 'row' },
        ...rest,
      }}
    >
      {image && (
        <Image
          alt={alt}
          height={440}
          objectFit="cover"
          src={image}
          width={330}
        />
      )}

      <Box my={{ base: 4, md: 0 }} w="330px">
        {caption && <Caption>{caption}</Caption>}
        {title && <Title mb={2}>{title}</Title>}
        {summary && <Summary>{summary}</Summary>}
      </Box>
    </Card>
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
