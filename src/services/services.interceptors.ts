import { i18n } from 'locales';
import _ from 'lodash';
import { toast } from 'react-toastify';

import { instance } from './services';

const API_KEY_PATH = ['headers', 'X-Api-Key'];

const TOKEN_PATH = ['headers', 'Authorization'];

export const setupInterceptors = (logoutFn: () => void): void => {
  instance.interceptors.request.use(
    (config) => {
      _.set(config, API_KEY_PATH, process.env.REACT_APP_API_KEY);

      const ACCESS_TOKEN = localStorage.getItem('access');

      if (ACCESS_TOKEN) _.set(config, TOKEN_PATH, `Bearer ${ACCESS_TOKEN}`);

      return config;
    },
    (error) => {
      Promise.reject(error);
    },
  );

  instance.interceptors.response.use(_.identity, (error) => {
    const isTokenExpired = ({ status }) => status === 401;
    const isMissingPermissions = ({ status }) => status === 403;
    const isServerError = ({ status }) => status === 500;

    const TOKEN = localStorage.getItem('access');

    if (isTokenExpired(error?.response) && !_.isNil(TOKEN)) {
      _.unset(instance, TOKEN_PATH);
      const MESSAGE = i18n.t('api.default.status-code.401', { ns: 'errors' });
      toast.error(MESSAGE);
      logoutFn();
    }

    if (isMissingPermissions(error?.response)) {
      const MESSAGE = i18n.t('api.default.status-code.403', { ns: 'errors' });
      toast.error(MESSAGE);
    }

    if (isServerError(error?.response)) {
      const MESSAGE = i18n.t('api.default.status-code.500', { ns: 'errors' });
      toast.error(MESSAGE);
    }

    return Promise.reject(error);
  });
};
