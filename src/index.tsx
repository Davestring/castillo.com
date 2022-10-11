import { App } from 'pages/App';
import React from 'react';
import ReactDOM from 'react-dom/client';

const MOUNT_NODE = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

const CasaCastillo: React.FC = (): JSX.Element => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

MOUNT_NODE.render(<CasaCastillo />);
