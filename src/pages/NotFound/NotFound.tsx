import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const NotFound = (): JSX.Element => {
  const { t } = useTranslation('page:not-found');

  return <Heading>{t('heading')}</Heading>;
};
