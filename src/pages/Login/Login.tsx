import { Text } from '@chakra-ui/react';
import { AnalyticsIcon } from 'components/icons';
import { Container } from 'components/layout';
import { AuthContext } from 'contexts';
import fp from 'lodash/fp';
import { useContext } from 'react';
import { use100vh } from 'react-div-100vh';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router-dom';

import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';

export const Login = (): JSX.Element => {
  const { access, authFn } = useContext(AuthContext);

  const { t } = useTranslation('page:login');

  const height = use100vh();

  if (!fp.isNil(access)) return <Navigate to="/dashboard" />;

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Container
        bg={{ base: 'white', md: '#F6F7FA' }}
        isFluid
        minH={height || 0}
        py={12}
      >
        <Header mb={{ base: 8, md: 12 }} />

        <Card>
          <Text
            align="center"
            color="blue.700"
            fontSize="lg"
            fontWeight="bold"
            mb={8}
          >
            {t('title')}
          </Text>

          <Form onSubmit={authFn} />
        </Card>

        <Footer />
      </Container>

      <AnalyticsIcon
        bottom={8}
        color="blue.700"
        display={{ base: 'none', lg: 'block' }}
        height={226}
        position="fixed"
        right={8}
        width={341}
        zIndex="docked"
      />
    </>
  );
};
