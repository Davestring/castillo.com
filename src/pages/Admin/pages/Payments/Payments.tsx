import { PageHeadline } from 'components/elements';
import { Table } from 'components/modules';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const Payments = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  return (
    <>
      <Helmet>
        <title>{t('payments.helmet')}</title>
      </Helmet>

      <PageHeadline
        mb={4}
        quote={t('payments.quote')}
        title={t('payments.title')}
      />

      <Table flex={1} headers={[]} isLoading overflow="scroll" />
    </>
  );
};
