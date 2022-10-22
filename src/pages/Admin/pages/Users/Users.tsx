import { Td, Tr } from '@chakra-ui/react';
import { PageHeadline } from 'components/elements';
import { Table } from 'components/modules';
import { useFetch } from 'hooks';
import fp from 'lodash/fp';
import { nanoid } from 'nanoid';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { IUserResource, UserResources } from 'services/resources';
import { formatDate, USERS_TABLE_HEADERS } from 'utils';

export const Users = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  const { data, isLoading } = useFetch<IUserResource>(UserResources, {
    ordering: '-id',
  });

  const isEmpty = useMemo(
    () => fp.compose(fp.isEmpty, fp.get('results'))(data),
    [data],
  );

  return (
    <>
      <Helmet>
        <title>{t('users.helmet')}</title>
      </Helmet>

      <PageHeadline mb={6} quote={t('users.quote')} title={t('users.title')} />

      <Table
        flex={1}
        headers={USERS_TABLE_HEADERS}
        isEmpty={isEmpty}
        isLoading={isLoading}
      >
        {data?.results?.map((item) => (
          <Tr key={nanoid()} position="relative">
            <Td fontSize="sm" fontWeight="medium">
              {item?.id}
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              {item?.email}
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              {item?.first_name}
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              {fp.compose(formatDate, fp.get('updated'))(item)}
            </Td>
            <Td fontSize="sm" fontWeight="medium">
              {fp.compose(formatDate, fp.get('created'))(item)}
            </Td>
          </Tr>
        ))}
      </Table>
    </>
  );
};
