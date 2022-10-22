import { Container, Header, WorkInProgress } from 'components/layout';
import { AuthContext } from 'contexts';
import { useContext } from 'react';
import { use100vh } from 'react-div-100vh';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const Booking = (): JSX.Element => {
  const { access } = useContext(AuthContext);

  const { t } = useTranslation('page:booking');

  const height = use100vh();

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Header isAuthenticated={!!access} isDark position="fixed" withLogo />

      <Container
        as="article"
        bg="bg"
        display="flex"
        flexDir="column"
        h={height || 0}
        isFluid
        pt={16}
      >
        <Container
          as="section"
          display="flex"
          flex={1}
          flexDir="column"
          overflowX="hidden"
          px={0}
          py={4}
        >
          <WorkInProgress flex={1} />
        </Container>
      </Container>
    </>
  );
};
