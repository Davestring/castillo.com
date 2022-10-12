import { SEO } from 'components/layout';
import { useTranslation } from 'react-i18next';

import { Spotlight } from './components/Spotlight';

export const Home = (): JSX.Element => {
  const { t } = useTranslation('page:home');

  return (
    <>
      <SEO title={t('helmet')} />

      <Spotlight />
    </>
  );
};
