import { Box } from '@chakra-ui/react';
import { Head } from 'components/behaviours/Shareability';
import Insights from 'components/modules/Insights';
import Layout from 'components/modules/Layout';
import Spotlight from 'components/modules/Spotlight';
import { useTranslations } from 'locales';
import PropTypes from 'prop-types';
import InsightResources from 'services/resources/insight';

function Index(props) {
  const { insights, error } = props;
  const { t } = useTranslations();

  if (error) return null;

  return (
    <>
      <Head title={t('meta.title')} description={t('meta.description')}></Head>

      <Layout translations={t}>
        <Box as="article" mt="-4rem">
          <Spotlight
            as="section"
            bg="base"
            mb={20}
            title={t('spotlight.title')}
            quote={t('spotlight.quote')}
          ></Spotlight>
          <Insights
            as="section"
            insights={insights}
            maxWidth="900px"
            mb={20}
          ></Insights>
        </Box>
      </Layout>
    </>
  );
}

Index.propTypes = {
  error: PropTypes.bool,
  insights: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      cover: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
      summary: PropTypes.string,
      title: PropTypes.string,
      isReverse: PropTypes.bool,
    }),
  ),
};

Index.defaultProps = {
  error: false,
  insights: [],
};

export const getStaticProps = async () => {
  try {
    const response = await InsightResources.findAll();
    const insights = response?.data?.map((item, idx) => ({
      ...item,
      isReverse: idx % 2 !== 0,
    }));

    return {
      props: {
        error: false,
        insights,
      },
    };
  } catch (error) {
    return {
      props: {
        error: true,
      },
    };
  }
};

export default Index;
