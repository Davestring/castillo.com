import { Icon, Stack, StackProps, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { FaSignOutAlt } from 'react-icons/fa';

export type ILogoutProps = StackProps;

export const Logout: React.FC<ILogoutProps> = (props): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <Stack {...props}>
      <Icon as={FaSignOutAlt} boxSize={4} color="bg" />
      <Text color="bg" fontSize="sm" fontWeight="semibold">
        {t('logout')}
      </Text>
    </Stack>
  );
};

Logout.defaultProps = {
  _hover: { bg: 'primary.600', transition: 'background .5s ease' },
  alignItems: 'center',
  cursor: 'pointer',
  isInline: true,
  px: 6,
  py: 4,
  spacing: 2,
  transition: 'background .5s ease',
};
