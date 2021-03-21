import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { locales } from 'locales';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { StrictMode } from 'react';
import { IntlProvider } from 'react-intl';
import fonts from 'styles/font-face';
import theme from 'styles/theme';

function App({ Component, pageProps }) {
  const router = useRouter();
  const { defaultLocale, locale, pathname } = router;
  const messages = locales[locale][pathname];

  return (
    <IntlProvider {...{ defaultLocale, locale, messages }}>
      <ChakraProvider resetCSS theme={theme}>
        <StrictMode>
          <Global styles={fonts} />
          <Component {...pageProps} />
        </StrictMode>
      </ChakraProvider>
    </IntlProvider>
  );
}

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  pageProps: PropTypes.shape({}),
};

export default App;
