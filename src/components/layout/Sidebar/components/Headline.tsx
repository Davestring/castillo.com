import { Avatar, Box, Stack, StackProps, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export type IHeadlineProps = StackProps;

export const Headline: React.FC<IHeadlineProps> = (props): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <Stack {...props}>
      <Avatar bg="primary.600" name="David Martinez" size="lg" />

      <Box>
        <Text align="center" fontSize="sm" fontWeight="bold">
          David Martinez
        </Text>
        <Text align="center" color="blackAlpha.500" fontSize="xs">
          {t('casa-castillo')}
        </Text>
      </Box>
    </Stack>
  );
};

Headline.defaultProps = {
  align: 'center',
  borderBottom: '2px',
  borderColor: 'blackAlpha.100',
  h: 154,
  justify: 'center',
  px: 4,
  w: '100%',
};
