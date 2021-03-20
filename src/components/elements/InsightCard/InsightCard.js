import { Box, Flex } from '@chakra-ui/react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';

function InsightCard(props) {
  const { alt, image, isReverse, children, ...rest } = props;

  const renderChildren = children();

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
        {renderChildren && React.Children.only(renderChildren)}
      </Box>
    </Flex>
  );
}

InsightCard.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.func.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  isReverse: PropTypes.bool,
};

InsightCard.defaultProps = {
  isReverse: false,
};

export default InsightCard;
