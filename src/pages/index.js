import { Box } from '@chakra-ui/react';
import Features from 'components/modules/Features';
import Gallery from 'components/modules/Gallery';
import Layout from 'components/modules/Layout';
import Services from 'components/modules/Services';
import Spotlight from 'components/modules/Spotlight';
import { FEATURES_DATA } from 'mocks/features';
import { GALLERY_DATA, GALLERY_HEADING } from 'mocks/gallery';
import { SERVICES_DATA, SERVICES_HEADING } from 'mocks/services';
import { SPOTLIGHT_HEADER, SPOTLIGHT_QUOTE } from 'mocks/spotlight';
import Head from 'next/head';

function CastilloCasa() {
  return (
    <>
      <Head>
        <title>Casa Castillo: Oaxtepec</title>
      </Head>
      <Layout>
        <Box as="article" mt="-4rem">
          <Spotlight
            as="section"
            bg="base"
            title={SPOTLIGHT_HEADER}
            quote={SPOTLIGHT_QUOTE}
          ></Spotlight>

          <Services
            as="section"
            maxWidth="900px"
            mt={20}
            services={SERVICES_DATA}
            heading={SERVICES_HEADING}
          ></Services>

          <Gallery
            as="section"
            content={GALLERY_DATA}
            heading={GALLERY_HEADING}
            mb={12}
            mt={20}
            px={4}
          ></Gallery>

          <Features
            as="section"
            bg="primary"
            features={FEATURES_DATA}
          ></Features>
        </Box>
      </Layout>
    </>
  );
}

export default CastilloCasa;
