import { Box } from '@chakra-ui/react';
import Gallery from 'components/modules/Gallery';
import Layout from 'components/modules/Layout';
import Services from 'components/modules/Services';
import Spotlight from 'components/modules/Spotlight';
import { GALLERY_DATA, GALLERY_HEADING } from 'mocks/gallery';
import { SERVICES_DATA, SERVICES_HEADING } from 'mocks/services';
import { SPOTLIGHT_HEADER, SPOTLIGHT_QUOTE } from 'mocks/spotlight';
import Head from 'next/head';

function CastilloCasa() {
  return (
    <>
      <Head>
        <title>Casa Castillo</title>
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
            mt={20}
          ></Gallery>
        </Box>
      </Layout>
    </>
  );
}

export default CastilloCasa;
