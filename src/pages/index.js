import { Box } from '@chakra-ui/react';
import { Head } from 'components/behaviours/Shareability';
import Layout from 'components/modules/Layout';
import Spotlight from 'components/modules/Spotlight';
import { useTranslations } from 'locales';

function CastilloCasa() {
  const { t } = useTranslations();

  return (
    <>
      <Head title={t('meta.title')} description={t('meta.description')}></Head>

      <Layout translations={t}>
        <Box as="article" mt="-4rem">
          <Spotlight
            as="section"
            bg="base"
            title={t('spotlight.title')}
            quote={t('spotlight.quote')}
          ></Spotlight>
        </Box>
      </Layout>
    </>
  );
}

export default CastilloCasa;
