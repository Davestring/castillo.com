import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export const Home = (): JSX.Element => {
  const { t } = useTranslation('page:home');

  return <Heading>{t('heading')}</Heading>;
};
