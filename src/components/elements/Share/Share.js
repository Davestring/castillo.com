import { Button, Icon, Text } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';
import { FaShare } from 'react-icons/fa';

function Share(props) {
  const { ...rest } = props;
  const { t } = useTranslation('common');

  return (
    <Button {...rest}>
      <Icon as={FaShare} mr={2}></Icon>
      <Text fontSize="sm">{t('button.share')}</Text>
    </Button>
  );
}

Share.propTypes = {};

Share.defaultProps = {
  colorScheme: 'blue',
  variant: 'ghost',
};

export default Share;
