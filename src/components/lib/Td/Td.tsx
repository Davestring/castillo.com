import { TableCellProps, Td as Base } from '@chakra-ui/react';

export type ITdProps = TableCellProps;

export const Td: React.FC<ITdProps> = (props): JSX.Element => {
  const { children, ...rest } = props;

  return <Base {...rest}>{children}</Base>;
};

Td.defaultProps = {
  fontSize: 'sm',
  fontWeight: 'medium',
};
