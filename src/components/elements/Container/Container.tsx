import { Box, BoxProps } from '@chakra-ui/react';
import { ReactElement, ReactNode } from 'react';

export interface Props extends BoxProps {
  children: ReactNode;
  isFluid?: boolean;
}

function Container({ children, isFluid, ...rest }: Props): ReactElement {
  return (
    <Box
      {...{
        marginX: 'auto',
        maxWidth: '1200px',
        paddingX: 4,
        position: 'relative',
        width: '100%',
        ...(isFluid && { maxWidth: '100%', paddingX: 0 }),
        ...rest,
      }}
    >
      {children}
    </Box>
  );
}

Container.defaultProps = {
  isFluid: false,
};

export default Container;
