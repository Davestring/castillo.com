import { Box, BoxProps, Icon } from '@chakra-ui/react';
import { AiOutlineMenu } from 'react-icons/ai';

export type IBurgerButtonProps = BoxProps;

export const BurgerButton: React.FC<IBurgerButtonProps> = (
  props,
): JSX.Element => {
  const { boxSize, color, ...rest } = props;

  return (
    <Box boxSize={boxSize} {...rest}>
      <Icon as={AiOutlineMenu} boxSize={boxSize} color={color} />
    </Box>
  );
};

BurgerButton.defaultProps = {
  boxSize: 8,
  sx: {
    ':hover': {
      cursor: 'pointer',
      transform: 'scale(1.05)',
      transition: 'all 0.5s ease',
    },
  },
  transition: 'all 1s ease',
};
