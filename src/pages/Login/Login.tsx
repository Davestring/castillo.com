import { Text } from '@chakra-ui/react';
import Color from 'color';
import { AnalyticsIcon } from 'components/icons';
import { Container } from 'components/layout';
import { useCallback } from 'react';
import { use100vh } from 'react-div-100vh';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { Card } from './components/Card';
import { Footer } from './components/Footer';
import { Form } from './components/Form';
import { Header } from './components/Header';

export const Login = (): JSX.Element => {
  const { t } = useTranslation('page:login');

  const height = use100vh();

  const handleOnSubmit = useCallback(() => {}, []);

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Container
        bg={{ base: 'white', md: Color('#101D2C').lighten(7).hex() }}
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

          <Form onSubmit={handleOnSubmit} />
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
