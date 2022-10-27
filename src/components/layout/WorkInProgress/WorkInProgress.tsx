import { Flex, FlexProps, useMediaQuery } from '@chakra-ui/react';
import { WorkInProgressIcon } from 'components/icons';
import { H1 } from 'components/typography';
import { useTranslation } from 'react-i18next';

export type IWorkInProgressProps = FlexProps;

export const WorkInProgress: React.FC<IWorkInProgressProps> = (
  props,
): JSX.Element => {
  const { t } = useTranslation('common');

  const [isLargerThan768] = useMediaQuery('(min-width: 768px)');

  return (
    <Flex {...props}>
      <H1 fontSize={{ base: 'xl', lg: '3xl', md: '2xl' }} textAlign="center">
        {t('work-in-progress')}
      </H1>

      <WorkInProgressIcon
        color="primary.600"
        height={isLargerThan768 ? 350 : 200}
        width={isLargerThan768 ? 416 : 266}
      />
    </Flex>
  );
};

WorkInProgress.defaultProps = {
  align: 'center',
  bg: 'white',
  border: '2px',
  borderColor: 'blackAlpha.100',
  direction: 'column',
  gap: 8,
  justify: 'center',
  overflow: 'hidden',
  p: 8,
  rounded: 'md',
};
