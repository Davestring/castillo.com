import { Icon, Stack, StackProps, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';
import { FaReact } from 'react-icons/fa';

export type IStatsProps = StackProps;

export const Stats: React.FC<IStatsProps> = (props) => {
  const { children, ...rest } = props;

  return <Stack {...rest}>{children}</Stack>;
};

Stats.defaultProps = {
  align: 'center',
  isInline: true,
  spacing: 4,
};

export interface IStatsItem extends StackProps {
  /**
   * Graphic representation of the stat.
   */
  icon: IconType;
  /**
   * Numerical value of the stat.
   */
  stat: number;
}

export const StatsItem: React.FC<IStatsItem> = (props) => {
  const { icon, stat, ...rest } = props;

  return (
    <Stack {...rest}>
      <Text as="span" fontSize="sm">
        {stat}
      </Text>
      <Icon as={icon} h={4} transform="translateY(10%)" w={4} />
    </Stack>
  );
};

StatsItem.defaultProps = {
  icon: FaReact,
  isInline: true,
  spacing: 1,
  stat: 0,
};
