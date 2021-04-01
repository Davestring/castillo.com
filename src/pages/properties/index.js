import { Box } from '@chakra-ui/react';
import { Head } from 'components/behaviours/Shareability';
import Layout from 'components/modules/Layout';
import Listing from 'components/modules/Properties';
import Spotlight from 'components/modules/Spotlight';
import { useTranslations } from 'locales';
import _ from 'lodash';
import PropTypes from 'prop-types';
import PropertyResources from 'services/resources/property';
import formatAddress from 'utils/format-address';

export const getStaticProps = async () => {
  const formatObj = (obj) => ({ ...obj, address: formatAddress(obj?.address) });

  const response = await PropertyResources.findAll();
  const properties = _.flow(
    (obj) => _.get(obj, 'data'),
    (arr) => _.map(arr, (obj) => formatObj(obj)),
    (arr) => _.map(arr, (obj) => _.omit(obj, ['active', 'created', 'updated'])),
  )(response);

  return { props: { properties } };
};

function Properties(props) {
  const { properties } = props;
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

          <Listing as="section" mb={20} properties={properties}></Listing>
        </Box>
      </Layout>
    </>
  );
}

Properties.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      cover: PropTypes.string,
      rating: PropTypes.number,
      address: PropTypes.string,
    }),
  ),
};

Properties.defaultProps = {
  properties: [],
};

export default Properties;
