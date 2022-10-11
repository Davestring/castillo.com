import { Box, BoxProps } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { __DEV__ } from 'utils';

export interface IContainerProps extends BoxProps {
  /**
   * If `true`, then the container will take the 100% available width,
   * otherwise its max-width will be 1200px.
   */
  isFluid?: boolean;
}

export const Container = forwardRef<HTMLDivElement, IContainerProps>(
  (props, ref): JSX.Element => {
    const { children, isFluid, ...rest } = props;

    return (
      <Box
        ref={ref}
        {...(isFluid ? { maxW: '100%', px: 2 } : { maxW: '1200px', px: 4 })}
        {...rest}
      >
        {children}
      </Box>
    );
  },
);

if (__DEV__) {
  Container.displayName = 'Container';
}

Container.defaultProps = {
  isFluid: false,
  mx: 'auto',
  position: 'relative',
  w: '100%',
};
