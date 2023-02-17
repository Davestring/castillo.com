import { IconButton, IconButtonProps } from '@chakra-ui/react';
import { CgMenuGridR } from 'react-icons/cg';

export type IFullGalleryButtonProps = IconButtonProps;

export const FullGalleryButton: React.FC<IFullGalleryButtonProps> = (props) => (
  <IconButton {...props} />
);

FullGalleryButton.defaultProps = {
  bottom: 4,
  colorScheme: 'whiteAlpha',
  icon: <CgMenuGridR color="primary" />,
  position: 'absolute',
  right: 4,
  size: 'sm',
};
