import { Box, Icon, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaCopyright } from 'react-icons/fa';

function Copyright(props) {
  const { translations: t, ...rest } = props;

  return (
    <Box {...rest}>
      <Icon as={FaCopyright} color="base" h={3} mr={1} w={3}></Icon>
      <Text as="span" color="base" fontSize="xs" fontStyle="italic">
        {t('footer.copyright')}
      </Text>
    </Box>
  );
}

Copyright.propTypes = {
  translations: PropTypes.func,
};

Copyright.defaultProps = {
  textAlign: { base: 'center', md: 'start' },
  translations: () => '',
};

export default Copyright;
