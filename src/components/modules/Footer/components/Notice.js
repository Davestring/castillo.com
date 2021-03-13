import { Stack } from '@chakra-ui/react';

import Redirect from './Redirect';

function Notice(props) {
  const { ...rest } = props;
  return (
    <Stack {...rest}>
      <Redirect href="/legal">Legal</Redirect>
      <Redirect href="/privacy">Privacy</Redirect>
      <Redirect href="/terms">Terms</Redirect>
    </Stack>
  );
}

Notice.defaultProps = {
  isInline: true,
  spacing: 4,
};

export default Notice;
