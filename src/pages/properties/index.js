import { Box } from '@chakra-ui/react';
import { Head } from 'components/behaviours/Shareability';
import Layout from 'components/modules/Layout';
import Listing from 'components/modules/Properties';
import Spotlight from 'components/modules/Spotlight';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PropTypes from 'prop-types';
import PropertyResources from 'services/resources/property';
import { formatAddress } from 'utils/format-utils';

export const getStaticProps = async ({ locale }) => {
  const formatObj = (obj) => ({ ...obj, address: formatAddress(obj?.address) });

  const response = await PropertyResources.findAll();
  const properties = _.flow(
    (obj) => _.get(obj, 'data'),
    (arr) => _.map(arr, (obj) => formatObj(obj)),
    (arr) => _.map(arr, (obj) => _.omit(obj, ['active', 'created', 'updated'])),
  )(response);

  return {
    props: {
      properties,
      ...(await serverSideTranslations(locale, ['properties', 'footer'])),
    },
  };
};

function Properties(props) {
  const { properties } = props;
  const { t } = useTranslation('properties');

  return (
    <>
      <Head title={t('meta.title')} description={t('meta.description')}></Head>

      <Layout>
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
      price: PropTypes.number,
      beds: PropTypes.number,
      bathrooms: PropTypes.number,
      rooms: PropTypes.number,
      guests: PropTypes.number,
      rating: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      address: PropTypes.string,
    }),
  ),
};

Properties.defaultProps = {
  properties: [],
};

export default Properties;
