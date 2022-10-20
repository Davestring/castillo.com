import { PageHeadline } from 'components/elements';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const Dashboard = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  return (
    <>
      <Helmet>
        <title>{t('dashboard.helmet')}</title>
      </Helmet>

      <PageHeadline title={t('dashboard.title')} />
    </>
  );
};
