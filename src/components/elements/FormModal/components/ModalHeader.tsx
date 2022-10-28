import { ModalHeader as Base, ModalHeaderProps } from '@chakra-ui/react';

export interface IModalHeaderProps extends ModalHeaderProps {
  /**
   * Headline title.
   */
  title: string;
}

export const ModalHeader: React.FC<IModalHeaderProps> = (
  props,
): JSX.Element => {
  const { title, ...rest } = props;

  return <Base {...rest}>{title}</Base>;
};

ModalHeader.defaultProps = {
  borderBottom: '2px',
  borderColor: 'blackAlpha.100',
  color: 'primary.700',
};
