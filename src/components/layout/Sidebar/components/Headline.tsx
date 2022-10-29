import { Avatar, Box, Stack, StackProps, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';
import { IUserResource } from 'services/resources';

export interface IHeadlineProps extends StackProps {
  /**
   * Authenticated user.
   */
  user?: IUserResource | null;
}

export const Headline: React.FC<IHeadlineProps> = (props): JSX.Element => {
  const { user, ...rest } = props;

  const { t } = useTranslation('common');

  return (
    <Stack {...rest}>
      <Avatar
        bg="bg"
        color="primary.700"
        name={`${user?.name} ${user?.first_surname}`}
        size="lg"
      />

      <Box>
        <Text align="center" color="bg" fontSize="sm" fontWeight="bold">
          {`${user?.name} ${user?.first_surname}`}
        </Text>
        <Text align="center" color="bg" fontSize="xs">
          {t('casa-castillo')}
        </Text>
      </Box>
    </Stack>
  );
};

Headline.defaultProps = {
  align: 'center',
  borderBottom: '2px',
  borderColor: 'primary.900',
  h: 154,
  justify: 'center',
  px: 4,
  w: '100%',
};
