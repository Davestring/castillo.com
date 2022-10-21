import { Flex } from '@chakra-ui/react';
import { PageHeadline } from 'components/elements';
import { useFetch } from 'hooks';
import { useMemo } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { IReservationResource, ReservationResources } from 'services/resources';
import StringMask from 'string-mask';

import { Calendar } from './components/Calendar';

export const Reservations = (): JSX.Element | null => {
  const { data, isLoading } =
    useFetch<IReservationResource>(ReservationResources);

  const { t } = useTranslation('page:admin');

  const events = useMemo(() => {
    const formatter = new StringMask('(##) ####-####');

    return data?.results?.map((item) => ({
      end: item?.check_out,
      start: item?.check_in,
      title: `${item?.guest?.name} - ${formatter.apply(item?.guest?.phone)}`,
    }));
  }, [data]);

  if (isLoading) return null;

  return (
    <>
      <Helmet>
        <title>{t('reservations.helmet')}</title>
      </Helmet>

      <PageHeadline
        mb={6}
        quote={t('reservations.quote')}
        title={t('reservations.title')}
      />

      <Flex
        flex={1}
        mt="0 !important"
        overflowY="scroll"
        sx={{ '&>div': { flex: 1 } }}
      >
        <Calendar events={events} />
      </Flex>
    </>
  );
};
