import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MemoryRouter } from 'react-router-dom';
import { Global } from '@emotion/react';
import { GLOBAL_CSS } from '../src';

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <Global styles={GLOBAL_CSS} />
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ChakraProvider>
  ),
];
