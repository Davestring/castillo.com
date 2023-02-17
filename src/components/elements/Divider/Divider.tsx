import { Box, BoxProps } from '@chakra-ui/react';

export type IDividerProps = BoxProps;

export const Divider: React.FC<IDividerProps> = (props): JSX.Element => (
  <Box {...props} />
);

Divider.defaultProps = {
  h: '1.5px',
  mx: 'auto',
  w: 10,
};
