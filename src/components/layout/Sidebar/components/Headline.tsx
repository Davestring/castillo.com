import { Avatar, Box, Stack, StackProps, Text } from '@chakra-ui/react';
import fp from 'lodash/fp';
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

  const getFullname = fp.compose(
    fp.trim,
    fp.join(' '),
    fp.values,
    fp.omitBy(fp.isNil),
    fp.pick(['name', 'first_surname', 'last_surname']),
  );

  return (
    <Stack {...rest}>
      <Avatar bg="bg" color="primary.700" name={getFullname(user)} size="lg" />

      <Box>
        <Text align="center" color="bg" fontSize="sm" fontWeight="bold">
          {getFullname(user)}
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
