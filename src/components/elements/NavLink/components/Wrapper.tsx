import { Flex, FlexProps } from '@chakra-ui/react';
import { forwardRef } from 'react';
import { __DEV__ } from 'utils';

export type IWrapperProps = FlexProps;

export const Wrapper = forwardRef<HTMLDivElement, IWrapperProps>(
  (props, ref): JSX.Element => {
    const { children, ...rest } = props;

    return (
      <Flex ref={ref} {...rest}>
        {children}
      </Flex>
    );
  },
);

if (__DEV__) {
  Wrapper.displayName = 'Wrapper';
}

Wrapper.defaultProps = {
  align: 'center',
  h: '100%',
  justify: 'center',
  position: 'relative',
  sx: {
    '&:hover': {
      '> #bluediv': {
        h: '3px',
        transition: 'width 0.5s ease',
        w: '100%',
      },
      cursor: 'pointer',
    },
  },
};
