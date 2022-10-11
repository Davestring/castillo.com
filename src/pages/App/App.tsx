import { useTranslation } from 'react-i18next';

export const App = (): JSX.Element => {
  const { t } = useTranslation('page:home');

  return <h1>{t('heading')}</h1>;
};
