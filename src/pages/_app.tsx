import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { StrictMode } from 'react';

import fonts from 'styles/font-face';
import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <StrictMode>
        <Global styles={fonts} />
        <Component {...pageProps} />
      </StrictMode>
    </ChakraProvider>
  );
}

export default App;
