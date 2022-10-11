import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { MemoryRouter } from 'react-router-dom';

export const decorators = [
  (Story) => (
    <ChakraProvider>
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    </ChakraProvider>
  ),
];
