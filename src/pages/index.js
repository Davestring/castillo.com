import { Box } from '@chakra-ui/react';
import { Head } from 'components/behaviours/Shareability';
import Insights from 'components/modules/Insights';
import Layout from 'components/modules/Layout';
import Spotlight from 'components/modules/Spotlight';
import { useTranslations } from 'locales';
import _ from 'lodash';
import PropTypes from 'prop-types';
import InsightResources from 'services/resources/insight';

export const getStaticProps = async () => {
  const includeReverse = (obj, idx) => ({ ...obj, isReverse: idx % 2 !== 0 });

  const response = await InsightResources.findAll();
  const insights = _.flow(
    (obj) => _.get(obj, 'data'),
    (arr) => _.map(arr, (obj, idx) => includeReverse(obj, idx)),
    (arr) => _.map(arr, (obj) => _.omit(obj, ['id', 'created', 'updated'])),
  )(response);

  return { props: { insights } };
};

function Index(props) {
  const { insights } = props;
  const { t } = useTranslations();

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
  insights: PropTypes.arrayOf(
    PropTypes.shape({
      caption: PropTypes.string,
      summary: PropTypes.string,
      title: PropTypes.string,
      cover: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
      isReverse: PropTypes.bool,
    }),
  ),
};

Index.defaultProps = {
  insights: [],
};

export default Index;
