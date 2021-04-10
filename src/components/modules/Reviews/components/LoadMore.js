import { Button, Flex } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

function LoadMore(props) {
  const { ...rest } = props;
  const { t } = useTranslation('properties');

  return (
    <Flex {...rest}>
      <Button colorScheme="blackAlpha" px={8} size="sm" variant="outline">
        {t('properties.reviews.load')}
      </Button>
    </Flex>
  );
}

LoadMore.defaultProps = {
  justify: 'center',
};

export default LoadMore;
