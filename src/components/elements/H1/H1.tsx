import { ReactElement, ReactNode } from 'react';

import { Heading, HeadingProps } from '@chakra-ui/react';

export interface Props extends HeadingProps {
  children: ReactNode;
}

function H1({ children, ...rest }: Props): ReactElement {
  return (
    <Heading as="h1" fontSize="2xl" mb={4} {...rest}>
      {children}
    </Heading>
  );
}

export default H1;
