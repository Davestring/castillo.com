import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export interface ISEOProps {
  /**
   * SEO cover image.
   */
  cover?: string;
  /**
   * SEO title.
   */
  title: string;
}

export const SEO: React.FC<ISEOProps> = (props): JSX.Element => {
  const { cover = 'assets/img/meta.jpg', title } = props;

  const { t } = useTranslation('common');

  return (
    <Helmet>
      <meta content="" property="fb:app_id" />
      <meta content="website" property="og:type" />
      <meta content="https://casa-castillo.netlify.app" property="og:url" />
      <meta content="casa-castillo" property="og:image:alt" />
      <meta content="image/jpg" property="og:image:type" />
      <meta content={t('meta')} property="og:description" />

      <meta content="summary" name="twitter:card" />
      <meta content={t('meta')} name="twitter:description" />

      {cover && <meta content={cover} property="og:image" />}
      {title && <meta content={title} property="og:site_name" />}
      {title && <meta content={title} property="og:title" />}
      {cover && <meta content={cover} name="twitter:image" />}
      {title && <meta content={title} name="twitter:title" />}

      <meta content={t('meta')} name="description" />
      <title>{title}</title>
    </Helmet>
  );
};
