import { Box, BoxProps } from '@chakra-ui/react';

export type IBlueDivProps = BoxProps;

export const BlueDiv: React.FC<IBlueDivProps> = (props): JSX.Element => (
  <Box id="bluediv" {...props} />
);

BlueDiv.defaultProps = {
  bg: 'primary.600',
  bottom: 0,
  h: 0,
  position: 'absolute',
  w: 0,
};
