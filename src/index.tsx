import { ChakraProvider } from '@chakra-ui/react';
import { i18n } from 'locales';
import { App } from 'pages/App';
import { AuthProvider } from 'providers';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const MOUNT_NODE = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const CasaCastillo: React.FC = (): JSX.Element => (
  <>
    <I18nextProvider i18n={i18n} />
    <ToastContainer theme="colored" />
    <HelmetProvider>
      <ChakraProvider>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  </>
);

MOUNT_NODE.render(<CasaCastillo />);
