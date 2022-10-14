import 'react-toastify/dist/ReactToastify.css';

import { Box, Button } from '@chakra-ui/react';
import { AuthContext } from 'contexts';
import fp from 'lodash/fp';
import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navigate, Outlet } from 'react-router-dom';

export const Admin = (): JSX.Element | null => {
  const { access, isLoading, logoutFn } = useContext(AuthContext);

  const { t } = useTranslation('page:admin');

  if (isLoading) return null;

  if (fp.isNil(access)) return <Navigate replace to="/login" />;

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Box as="main">
        <Box as="section">
          <Button
            colorScheme="facebook"
            onClick={logoutFn}
            position="fixed"
            right={4}
            top={4}
            variant="ghost"
          >
            Logout
          </Button>

          <Outlet />
        </Box>
      </Box>
    </>
  );
};
