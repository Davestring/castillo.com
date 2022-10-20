import '@fullcalendar/daygrid/main.css';
import 'react-toastify/dist/ReactToastify.css';

import { ChakraProvider } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import Color from 'color';
import { i18n } from 'locales';
import { App } from 'pages/App';
import { AuthProvider } from 'providers';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { theme } from 'utils';

export const GLOBAL_CSS = `
  scroll-behavior: smooth;

  a {
    text-decoration: none !important;
  }

  .fc .fc-button-primary {
    background: #101D2C;
  }

  .fc .fc-button-primary:not(:disabled):active:focus, .fc .fc-button-primary:not(:disabled).fc-button-active:focus {
    box-shadow: none;
    background: ${Color('#101D2C').lighten(1).hex()};
  }

  .fc-toolbar {
    color: #101D2C;
    font-weight: 600;
    text-transform: capitalize;
  }

  .fc .fc-scrollgrid-liquid {
    background: white;
    border-radius: 4px;
  }

  .fc {
    font-size: 14px;
  }
`;

const MOUNT_NODE = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const CasaCastillo: React.FC = (): JSX.Element => (
  <React.StrictMode>
    <I18nextProvider i18n={i18n} />
    <ToastContainer theme="colored" />
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Global styles={GLOBAL_CSS} />
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);

MOUNT_NODE.render(<CasaCastillo />);
