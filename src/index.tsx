import '@fullcalendar/daygrid/main.css';
import 'react-toastify/dist/ReactToastify.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { i18n } from 'locales';
import { App } from 'pages/App';
import { AuthProvider } from 'providers';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { theme, useGlobalCSS } from 'utils';

const QUERY_CLIENT = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const MOUNT_NODE = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const CasaCastillo: React.FC = (): JSX.Element => {
  const css = useGlobalCSS();

  return (
    <React.StrictMode>
      <I18nextProvider i18n={i18n} />
      <ToastContainer theme="colored" />
      <HelmetProvider>
        <ChakraProvider theme={theme}>
          <Global styles={css} />
          <BrowserRouter>
            <AuthProvider>
              <QueryClientProvider client={QUERY_CLIENT}>
                <App />
              </QueryClientProvider>
            </AuthProvider>
          </BrowserRouter>
        </ChakraProvider>
      </HelmetProvider>
    </React.StrictMode>
  );
};

MOUNT_NODE.render(<CasaCastillo />);
