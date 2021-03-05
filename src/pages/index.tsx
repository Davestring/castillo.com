import { ReactElement } from 'react';

import Head from 'next/head';

import Spotlight from 'components/modules/Spotlight';

function CastilloCasa(): ReactElement {
  return (
    <>
      <Head>
        <title>Casa Castillo: Oaxtepec</title>
      </Head>
      <Spotlight></Spotlight>
    </>
  );
}

export default CastilloCasa;
