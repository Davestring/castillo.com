import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export interface ISEOProps {
  /**
   * SEO cover image.
   */
  cover?: string;
}

export const SEO: React.FC<ISEOProps> = (props): JSX.Element => {
  const { cover = 'assets/img/meta.jpg' } = props;

  const { t } = useTranslation('common');

  return (
    <Helmet>
      <meta content="" property="fb:app_id" />
      <meta content="website" property="og:type" />
      <meta content="https://casa-castillo.netlify.app" property="og:url" />
      <meta content="casa-castillo" property="og:image:alt" />
      <meta content="image/jpg" property="og:image:type" />
      <meta content={t('meta.description')} property="og:description" />
      <meta content={t('meta.title')} property="og:site_name" />
      <meta content={t('meta.title')} property="og:title" />
      <meta content={cover} property="og:image" />

      <meta content="summary" name="twitter:card" />
      <meta content={t('meta.description')} name="twitter:description" />
      <meta content={t('meta.title')} name="twitter:title" />
      <meta content={cover} name="twitter:image" />

      <meta content={t('meta.description')} name="description" />
      <title>{t('meta.title')}</title>
    </Helmet>
  );
};
