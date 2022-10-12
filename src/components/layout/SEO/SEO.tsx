import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

import { OpenGraphMeta } from './components/OpenGraphMeta';
import { TwitterMeta } from './components/TwitterMeta';

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
      <title>{title}</title>
      <meta content={t('meta')} name="description" />
      <OpenGraphMeta cover={cover} description={t('meta')} title={title} />
      <TwitterMeta cover={cover} description={t('meta')} title={title} />
    </Helmet>
  );
};
