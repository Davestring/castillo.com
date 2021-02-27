import { StrictMode } from 'react';

import { ChakraProvider } from '@chakra-ui/react';

import { AppProps } from 'next/app';

import theme from 'styles/theme';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <StrictMode>
        <Component {...pageProps} />
      </StrictMode>
    </ChakraProvider>
  );
}

export default App;
