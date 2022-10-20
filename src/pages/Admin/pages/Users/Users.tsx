import { PageHeadline } from 'components/elements';
import { Table } from 'components/modules';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { USERS_TABLE_HEADERS } from 'utils';

export const Users = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  return (
    <>
      <Helmet>
        <title>{t('users.helmet')}</title>
      </Helmet>

      <PageHeadline mb={6} quote={t('users.quote')} title={t('users.title')} />

      <Table flex={1} headers={USERS_TABLE_HEADERS} isEmpty />
    </>
  );
};
