import { IPageHeadlineProps, PageHeadline } from 'components/elements';
import { useCrudContext } from 'contexts';
import { useTranslation } from 'react-i18next';
import { IServiceResource } from 'services/resources';

export type IHeadlineProps = Omit<IPageHeadlineProps, 'quote' | 'title'>;

export const Headline: React.FC<IHeadlineProps> = (props): JSX.Element => {
  const { preparePost } = useCrudContext<IServiceResource>();

  const { t } = useTranslation('page:admin');

  return (
    <PageHeadline
      onClick={preparePost}
      quote={t('bookings.quote')}
      title={t('bookings.title')}
      {...props}
    />
  );
};
