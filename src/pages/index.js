import { Box } from '@chakra-ui/react';
import Layout from 'components/modules/Layout';
import Spotlight from 'components/modules/Spotlight';
import Head from 'next/head';

function CastilloCasa() {
  return (
    <>
      <Head>
        <title>Casa Castillo: Oaxtepec</title>
      </Head>
      <Layout>
        <Box as="article" mt="-4rem">
          <Spotlight as="section" bg="base"></Spotlight>
        </Box>
      </Layout>
    </>
  );
}

export default CastilloCasa;
