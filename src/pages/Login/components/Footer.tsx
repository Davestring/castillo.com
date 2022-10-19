import { Divider, Link, Stack, StackProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { Link as ReachLink } from 'react-router-dom';

export type IFooterProps = StackProps;

export const Footer: React.FC<IFooterProps> = (props): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <Stack as="footer" {...props}>
      <Link
        as={ReachLink}
        color="primary.600"
        fontSize="xs"
        fontWeight="semibold"
        to="/privacy"
      >
        {t('privacy')}
      </Link>

      <Divider bg="primary.600" h={4} orientation="vertical" w="0.125rem" />

      <Link
        as={ReachLink}
        color="primary.600"
        fontSize="xs"
        fontWeight="semibold"
        to="/terms"
      >
        {t('terms')}
      </Link>
    </Stack>
  );
};

Footer.defaultProps = {
  align: 'center',
  bottom: 6,
  gap: 4,
  isInline: true,
  justify: 'center',
  left: '50%',
  position: 'fixed',
  transform: 'translateX(-50%)',
  w: '100%',
  zIndex: 'docked',
};
