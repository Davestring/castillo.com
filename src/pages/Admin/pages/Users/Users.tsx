import { CrudProvider } from 'providers';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { UserResources } from 'services/resources';

import { Form } from './components/Form';
import { Headline } from './components/Headline';
import { Listing } from './components/Listing';

const DEFAULT_VALUES = {
  email: '',
  first_surname: '',
  is_staff: true,
  is_superuser: true,
  last_surname: '',
  name: '',
  password: '',
};

export const Users = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  return (
    <CrudProvider defaultValues={DEFAULT_VALUES} resources={UserResources}>
      <Helmet>
        <title>{t('users.helmet')}</title>
      </Helmet>

      <Headline mb={6} />
      <Listing flex={1} />
      <Form />
    </CrudProvider>
  );
};
