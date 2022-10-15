import { Container, Header } from 'components/layout';
import { use100vh } from 'react-div-100vh';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export const Booking = (): JSX.Element => {
  const { t } = useTranslation('page:booking');

  const height = use100vh();

  return (
    <>
      <Helmet>
        <title>{t('helmet')}</title>
      </Helmet>

      <Header position="fixed" />

      <Container bg="#F6F7FA" isFluid minHeight={height || 0} pt={16} />
    </>
  );
};
