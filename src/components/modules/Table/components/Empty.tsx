import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { EmptySearchIcon } from 'components/icons';
import { useTranslation } from 'react-i18next';

export interface IEmptyProps extends FlexProps {
  /**
   * If `true`, then the rendered component will be an empty container that
   * will notify the user that there are not results for its request.
   */
  isVisible: boolean;
}

export const Empty: React.FC<IEmptyProps> = (props): JSX.Element | null => {
  const { isVisible, ...rest } = props;

  const { t } = useTranslation('common');

  if (!isVisible) return null;

  return (
    <Flex {...rest}>
      <EmptySearchIcon color="primary.500" height={200} width={268} />
      <Text align="center" as="strong" fontSize="xl">
        {t('empty-search')}
      </Text>
    </Flex>
  );
};

Empty.defaultProps = {
  align: 'center',
  direction: 'column',
  gap: 4,
  justify: 'center',
  whiteSpace: 'normal',
};
