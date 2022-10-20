import { Flex } from '@chakra-ui/react';
import { PageHeadline } from 'components/elements';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { Calendar } from './components/Calendar';

export const Reservations = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  return (
    <>
      <Helmet>
        <title>{t('reservations.helmet')}</title>
      </Helmet>

      <PageHeadline
        mb={4}
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
    </>
  );
};
