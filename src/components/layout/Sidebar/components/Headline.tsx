import { Avatar, Box, Stack, StackProps, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export type IHeadlineProps = StackProps;

export const Headline: React.FC<IHeadlineProps> = (props): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <Stack {...props}>
      <Avatar bg="bg" color="primary.700" name="David Martinez" size="lg" />

      <Box>
        <Text align="center" color="bg" fontSize="sm" fontWeight="bold">
          David Martinez
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
