import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { StrictMode } from 'react';

import { AppProps } from 'next/app';

import fonts from 'styles/font-face';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <StrictMode>
        <Global styles={fonts}></Global>
        <Component {...pageProps}></Component>
      </StrictMode>
    </ChakraProvider>
  );
}

export default App;
