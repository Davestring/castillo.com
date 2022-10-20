import { Td, Tr } from '@chakra-ui/react';
import { PageHeadline } from 'components/elements';
import { Table } from 'components/modules';
import { nanoid } from 'nanoid';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { SERVICES_TABLE_HEADERS } from 'utils';

export const Services = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  return (
    <>
      <Helmet>
        <title>{t('services.helmet')}</title>
      </Helmet>

      <PageHeadline
        mb={6}
        quote={t('services.quote')}
        title={t('services.title')}
      />

      <Table
        flex={1}
        headers={SERVICES_TABLE_HEADERS}
        isEmpty={false}
        isLoading={false}
      >
        {[...Array(10)]?.map(() => (
          <Tr key={nanoid()} position="relative">
            <Td fontSize="sm" fontWeight="medium">
              1
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              Grill
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              Service area for cooking
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              24-01-22
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              24-01-22
            </Td>
          </Tr>
        ))}
      </Table>
    </>
  );
};
