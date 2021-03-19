import { Stack } from '@chakra-ui/react';
import PropTypes from 'prop-types';

import Redirect from './Redirect';

function Notice(props) {
  const { translations: t, ...rest } = props;

  return (
    <Stack {...rest}>
      <Redirect href="/about">{t('footer.about')}</Redirect>
      <Redirect href="/privacy">{t('footer.privacy')}</Redirect>
      <Redirect href="/terms">{t('footer.terms')}</Redirect>
    </Stack>
  );
}

Notice.propTypes = {
  translations: PropTypes.func,
};

Notice.defaultProps = {
  isInline: true,
  spacing: 4,
  translations: () => '',
};

export default Notice;
