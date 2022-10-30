import { Flex } from '@chakra-ui/react';
import { PageHeadline } from 'components/elements';
import { CrudProvider } from 'providers';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { BookingResources } from 'services/resources';

import { Calendar } from './components/Calendar';

const DEFAULT_VALUES = {
  check_in: '',
  check_out: '',
  email: '',
  first_surname: '',
  last_surname: '',
  name: '',
  phone: '',
};

export const Reservations = (): JSX.Element | null => {
  const { t } = useTranslation('page:admin');

  return (
    <CrudProvider defaultValues={DEFAULT_VALUES} resources={BookingResources}>
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
        <Calendar />
      </Flex>
    </CrudProvider>
  );
};
