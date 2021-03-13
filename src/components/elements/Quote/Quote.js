import { Box, Flex, Image } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

function Quote(props) {
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
        <Image alt={alt} h="440px" objectFit="cover" src={image} w="330px" />
      )}

      <Box my={{ base: 4, md: 0 }} w="330px">
        {renderChildren && React.Children.only(renderChildren)}
      </Box>
    </Flex>
  );
}

Quote.propTypes = {
  alt: PropTypes.string,
  children: PropTypes.func.isRequired,
  image: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
  isReverse: PropTypes.bool,
};

Quote.defaultProps = {
  isReverse: false,
};

export default Quote;
