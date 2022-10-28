import { CrudProvider } from 'providers';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { ServiceResources } from 'services/resources';

import { Form } from './components/Form';
import { Headline } from './components/Headline';
import { Listing } from './components/Listing';

const DEFAULT_VALUES = { description: '', name: '' };

export const Services = (): JSX.Element => {
  const { t } = useTranslation('page:admin');

  return (
    <CrudProvider defaultValues={DEFAULT_VALUES} resources={ServiceResources}>
      <Helmet>
        <title>{t('services.helmet')}</title>
      </Helmet>

      <Headline />
      <Listing flex={1} />
      <Form />
    </CrudProvider>
  );
};
