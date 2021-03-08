import { Box } from '@chakra-ui/react';
import Features from 'components/modules/Features';
import Gallery from 'components/modules/Gallery';
import Layout from 'components/modules/Layout';
import Service from 'components/modules/Service';
import Spotlight from 'components/modules/Spotlight';
import { FEATURES_DATA } from 'mocks/features';
import { GALLERY_DATA } from 'mocks/gallery';
import { SERVICES_DATA } from 'mocks/services';
import { SPOTLIGHT_HEADER, SPOTLIGHT_SUB_HEADER } from 'mocks/spotlight';
import { nanoid } from 'nanoid';
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
            subtitle={SPOTLIGHT_SUB_HEADER}
          ></Spotlight>
          <Box as="section">
            {SERVICES_DATA.map((item) => (
              <Service key={nanoid()} my={12} {...item}></Service>
            ))}
          </Box>

          <Gallery as="section" content={GALLERY_DATA} mb={12} px={4}></Gallery>
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
