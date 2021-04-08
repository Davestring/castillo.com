import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';
import PropTypes from 'prop-types';
import { StrictMode } from 'react';
import fonts from 'styles/font-face';
import theme from 'styles/theme';

function App({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <StrictMode>
        <Global styles={fonts} />
        <Component {...pageProps} />
      </StrictMode>
    </ChakraProvider>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.shape({}),
};

export default appWithTranslation(App);
