import { Stack } from '@chakra-ui/react';
import { useTranslation } from 'next-i18next';

import Redirect from './Redirect';

function Notice(props) {
  const { ...rest } = props;
  const { t } = useTranslation('footer');

  return (
    <Stack {...rest}>
      <Redirect href="/about">{t('footer.about')}</Redirect>
      <Redirect href="/privacy">{t('footer.privacy')}</Redirect>
      <Redirect href="/terms">{t('footer.terms')}</Redirect>
    </Stack>
  );
}

Notice.propTypes = {};

Notice.defaultProps = {
  isInline: true,
  spacing: 4,
};

export default Notice;
