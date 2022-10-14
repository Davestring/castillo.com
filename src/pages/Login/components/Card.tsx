import { Box, BoxProps } from '@chakra-ui/react';

export type ICardProps = BoxProps;

export const Card: React.FC<ICardProps> = (props): JSX.Element => {
  const { children, ...rest } = props;

  return (
    <Box as="section" role="main" {...rest}>
      {children}
    </Box>
  );
};

Card.defaultProps = {
  bg: 'white',
  mx: 'auto',
  p: { base: 0, md: 8 },
  rounded: { base: undefined, md: 'lg' },
  shadow: { base: undefined, md: 'md' },
  transition: 'all .5s ease',
  w: { base: '100%', md: 480 },
};
