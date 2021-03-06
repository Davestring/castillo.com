import { Box } from '@chakra-ui/react';
import Spotlight from 'components/modules/Spotlight';
import Head from 'next/head';

function CastilloCasa() {
  return (
    <>
      <Head>
        <title>Casa Castillo: Oaxtepec</title>
      </Head>
      <Box as="main">
        <Spotlight bg="base"></Spotlight>
      </Box>
    </>
  );
}

export default CastilloCasa;
