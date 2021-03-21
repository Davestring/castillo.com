import { Box } from '@chakra-ui/react';
import { Head } from 'components/behaviours/Shareability';
import Layout from 'components/modules/Layout';
import Listing from 'components/modules/Properties';
import Spotlight from 'components/modules/Spotlight';
import { useTranslations } from 'locales';
import PropTypes from 'prop-types';
import PropertyResources from 'services/resources/property';
import formatAddress from 'utils/format-address';

export const getStaticProps = async () => {
  const COVERS = [
    `${process.env.NEXT_PUBLIC_AWS_S3_URL}/fake-1.jpg`,
    `${process.env.NEXT_PUBLIC_AWS_S3_URL}/fake-2.jpg`,
    `${process.env.NEXT_PUBLIC_AWS_S3_URL}/fake-3.jpg`,
    `${process.env.NEXT_PUBLIC_AWS_S3_URL}/fake-4.jpg`,
  ];

  try {
    const response = await PropertyResources.findAll();
    const data = response?.data?.map((item, idx) => ({
      ...item,
      address: formatAddress(item.address),
      cover: COVERS[idx],
    }));

    return {
      props: {
        error: false,
        data,
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

function Properties(props) {
  const { data: properties, error } = props;
  const { t } = useTranslations();

  if (error) return <span>Error :(</span>;

  return (
    <>
      <Head title={t('meta.title')} description={t('meta.description')}></Head>

      <Layout translations={t}>
        <Box as="article" mt="-4rem">
          <Spotlight
            as="section"
            bg="base"
            mb={12}
            title={t('spotlight.title')}
            quote={t('spotlight.quote')}
          ></Spotlight>

          <Listing as="section" properties={properties}></Listing>
        </Box>
      </Layout>
    </>
  );
}

Properties.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
  error: PropTypes.bool,
};

Properties.defaultProps = {
  data: [],
  error: false,
};

export default Properties;
