import { ChakraProvider } from '@chakra-ui/react';
import { i18n } from 'locales';
import { App } from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { I18nextProvider } from 'react-i18next';
import { BrowserRouter } from 'react-router-dom';

const MOUNT_NODE = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const CasaCastillo: React.FC = (): JSX.Element => (
  <React.StrictMode>
    <I18nextProvider i18n={i18n} />
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

MOUNT_NODE.render(<CasaCastillo />);
