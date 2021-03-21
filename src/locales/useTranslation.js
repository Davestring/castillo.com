import { useIntl } from 'react-intl';

function useTranslations() {
  const { formatMessage } = useIntl();

  return {
    t: (id) => formatMessage({ id, defaultMessage: 'missing-key-or-value' }),
  };
}

export default useTranslations;
