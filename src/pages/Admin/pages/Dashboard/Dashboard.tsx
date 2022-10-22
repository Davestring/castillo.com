import { PageHeadline } from 'components/elements';
import { WorkInProgress } from 'components/layout';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const Dashboard = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  return (
    <>
      <Helmet>
        <title>{t('dashboard.helmet')}</title>
      </Helmet>

      <PageHeadline
        mb={6}
        quote={t('dashboard.quote')}
        title={t('dashboard.title')}
      />

      <WorkInProgress flex={1} />
    </>
  );
};
