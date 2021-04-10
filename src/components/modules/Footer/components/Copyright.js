import { Box, Icon, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FaCopyright } from 'react-icons/fa';

function Copyright(props) {
  const { ...rest } = props;
  const { t } = useTranslation('footer');

  return (
    <Box {...rest}>
      <Icon as={FaCopyright} color="base" h={3} mr={1} w={3}></Icon>
      <Text as="span" color="base" fontSize="xs" fontStyle="italic">
        {t('footer.copyright')}
      </Text>
    </Box>
  );
}

Copyright.propTypes = {};

Copyright.defaultProps = {
  textAlign: { base: 'center', md: 'start' },
};

export default Copyright;
