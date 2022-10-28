import { PageHeadline } from 'components/elements';
import { useCrudContext } from 'contexts';
import { useTranslation } from 'react-i18next';
import { IServiceResource } from 'services/resources';

export const Headline: React.FC = (): JSX.Element => {
  const { preparePost } = useCrudContext<IServiceResource>();

  const { t } = useTranslation('page:admin');

  return (
    <PageHeadline
      mb={6}
      onClick={preparePost}
      quote={t('services.quote')}
      title={t('services.title')}
    />
  );
};
