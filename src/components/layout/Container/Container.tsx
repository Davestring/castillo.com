import { Box, BoxProps } from '@chakra-ui/react';
import fp from 'lodash/fp';
import { forwardRef } from 'react';
import { use100vh } from 'react-div-100vh';
import { __DEV__ } from 'utils';

export interface IContainerProps extends BoxProps {
  /**
   * If `true`, then the container will take the 100% available width,
   * otherwise its max-width will be 1200px.
   */
  isFluid?: boolean;
  /**
   * If `true`, the container will take all the available height.
   */
  is100vh?: boolean;
}

export const Container = forwardRef<HTMLDivElement, IContainerProps>(
  (props, ref): JSX.Element | null => {
    const { children, isFluid, is100vh, ...rest } = props;

    const height = use100vh();

    if (fp.isNil(height)) return null;

    return (
      <Box
        ref={ref}
        {...(isFluid ? { maxW: '100%' } : { maxW: '1440px' })}
        {...(is100vh ? { h: height } : {})}
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
  is100vh: false,
  isFluid: false,
  mx: 'auto',
  overflowX: 'hidden',
  position: 'relative',
  px: 8,
  w: '100%',
};
