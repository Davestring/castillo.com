import { Container, Header } from 'components/layout';
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

      <Header isAuthenticated={!!access} position="fixed" />

      <Container bg="bg" isFluid minHeight={height || 0} pt={16} />
    </>
  );
};
