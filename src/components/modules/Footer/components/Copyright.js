import { Box, Icon, Text } from '@chakra-ui/react';
import { FaCopyright } from 'react-icons/fa';

function Copyright(props) {
  const { ...rest } = props;
  return (
    <Box {...rest}>
      <Icon as={FaCopyright} color="base" h={3} mr={1} w={3}></Icon>
      <Text as="span" color="base" fontSize="xs" fontStyle="italic">
        Neque porro quisquam est qui dolorem ipsum unde omnis iste natus
        quisquam est qui dolorem ipsum unde omnis iste natus
      </Text>
    </Box>
  );
}

Copyright.defaultProps = {
  textAlign: { base: 'center', md: 'start' },
};

export default Copyright;
