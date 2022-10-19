import { Box, BoxProps } from '@chakra-ui/react';

export interface IOverlayProps extends BoxProps {
  /**
   * If `true`, the overlay will be displayed in the entire screen on top of
   * every element with a `z-index` smaller than `1300`. By default is hidden
   * on large devices.
   */
  isVisible?: boolean;
}

export const Overlay: React.FC<IOverlayProps> = (props): JSX.Element => {
  const { isVisible, ...rest } = props;

  return (
    <Box
      display={{ base: isVisible ? 'block' : 'none', lg: 'none' }}
      {...rest}
    />
  );
};

Overlay.defaultProps = {
  bg: 'black',
  bottom: 0,
  left: 0,
  opacity: 0.8,
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 'overlay',
};
