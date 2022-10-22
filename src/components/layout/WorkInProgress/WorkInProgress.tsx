import { Flex, FlexProps } from '@chakra-ui/react';
import { WorkInProgressIcon } from 'components/icons';
import { H1 } from 'components/typography';
import { useTranslation } from 'react-i18next';

export type IWorkInProgressProps = FlexProps;

export const WorkInProgress: React.FC<IWorkInProgressProps> = (
  props,
): JSX.Element => {
  const { t } = useTranslation('common');

  return (
    <Flex {...props}>
      <H1 textAlign="center">{t('work-in-progress')}</H1>
      <WorkInProgressIcon color="primary.600" height={350} width={416} />
    </Flex>
  );
};

WorkInProgress.defaultProps = {
  align: 'center',
  bg: 'white',
  border: '2px',
  borderColor: 'blackAlpha.100',
  direction: 'column',
  gap: 4,
  justify: 'center',
  overflow: 'hidden',
  p: 8,
  rounded: 'md',
};
