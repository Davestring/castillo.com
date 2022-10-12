import { Divider as Base, DividerProps } from '@chakra-ui/react';

export type IDividerProps = DividerProps;

export const Divider: React.FC<IDividerProps> = (props): JSX.Element => (
  <Base {...props} />
);

Divider.defaultProps = {
  h: '1.5px',
  mx: 'auto',
  w: 10,
};
