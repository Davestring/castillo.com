import { Box, BoxProps } from '@chakra-ui/react';
import { ReactElement } from 'react';

export interface Props extends BoxProps {
  centered: boolean;
  height: string | number;
  width: string | number;
}

function Divider({
  centered, height, width, ...rest
}: Props): ReactElement {
  return (
    <Box
      h={height}
      w={width}
      {...(centered && { mx: 'auto' })}
      {...rest}
    />
  );
}

Divider.defaultProps = {
  centered: true,
  height: '1.5px',
  width: 10,
};

export default Divider;
