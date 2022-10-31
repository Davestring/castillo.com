import { IPageHeadlineProps, PageHeadline } from 'components/elements';
import { useCrudContext } from 'contexts';
import { useTranslation } from 'react-i18next';
import { IUserResource } from 'services/resources';

export type IHeadlineProps = Omit<IPageHeadlineProps, 'quote' | 'title'>;

export const Headline: React.FC<IHeadlineProps> = (props): JSX.Element => {
  const { preparePost } = useCrudContext<IUserResource>();

  const { t } = useTranslation('page:admin');

  return (
    <PageHeadline
      onClick={preparePost}
      quote={t('users.quote')}
      title={t('users.title')}
      {...props}
    />
  );
};
