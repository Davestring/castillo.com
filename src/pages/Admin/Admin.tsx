import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Outlet } from 'react-router-dom';

export const Admin = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Box as="main">
        <Box as="section">
          <Outlet />
        </Box>
      </Box>
    </>
  );
};
