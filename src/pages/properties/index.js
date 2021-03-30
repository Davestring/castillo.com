import { Box } from '@chakra-ui/react';
import { Head } from 'components/behaviours/Shareability';
import Layout from 'components/modules/Layout';
import Listing from 'components/modules/Properties';
import Spotlight from 'components/modules/Spotlight';
import { useTranslations } from 'locales';
import PropTypes from 'prop-types';
import PropertyResources from 'services/resources/property';
import formatAddress from 'utils/format-address';

function Properties(props) {
  const { properties, error } = props;
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

          <Listing as="section" mb={20} properties={properties}></Listing>
        </Box>
      </Layout>
    </>
  );
}

Properties.propTypes = {
  error: PropTypes.bool,
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      address: PropTypes.string,
      cover: PropTypes.string,
      description: PropTypes.string,
      title: PropTypes.string,
    }),
  ),
};

Properties.defaultProps = {
  error: false,
  properties: [],
};

export const getStaticProps = async () => {
  try {
    const response = await PropertyResources.findAll();
    const properties = response?.data?.map((item) => ({
      ...item,
      address: formatAddress(item.address),
    }));

    return {
      props: {
        error: false,
        properties,
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

export default Properties;
