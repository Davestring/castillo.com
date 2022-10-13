import { Button, Divider, Stack, StackProps } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export type IHeaderProps = StackProps;

export const Header: React.FC<IHeaderProps> = (props): JSX.Element => {
  const { t } = useTranslation('common');

  const navigate = useNavigate();

  return (
    <Stack as="header" {...props}>
      <Button
        color="white"
        onClick={() => navigate('/login')}
        size="sm"
        variant="link"
      >
        {t('button.login')}
      </Button>

      <Divider bg="white" h={10} orientation="vertical" w="0.125rem" />

      <Button
        colorScheme="gray"
        onClick={() => navigate('/booking')}
        px={8}
        size="sm"
      >
        {t('button.booking')}
      </Button>
    </Stack>
  );
};

Header.defaultProps = {
  align: 'center',
  gap: 4,
  isInline: true,
  justify: 'end',
  position: 'fixed',
  right: 4,
  top: 4,
  zIndex: 'banner',
};
