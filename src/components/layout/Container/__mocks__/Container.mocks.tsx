import { Code, Text } from '@chakra-ui/react';

export const DEFAULT_PROPS = {
  background: 'yellow.50',
  py: 4,
};

export const CHILDREN = () => (
  <Text fontSize="sm" fontWeight="bold">
    This is the <Code>Container</Code> Component, when the prop{' '}
    <Code>isFluid</Code> is set to <Code>true</Code> the max-width is 100%
    otherwise 1200px.
  </Text>
);
