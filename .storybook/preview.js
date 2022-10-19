import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MemoryRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GLOBAL_CSS } from '../src';
import { theme } from '../src/utils';

export const decorators = [
  (Story) => (
    <ChakraProvider theme={theme}>
      <Global styles={GLOBAL_CSS} />
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ChakraProvider>
  ),
];
