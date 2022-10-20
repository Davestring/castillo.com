import { Box, BoxProps, Flex, Spinner } from '@chakra-ui/react';

export interface ILoadingProps extends BoxProps {
  /**
   * If `true`, then the table will display an overlay layout with a spinner.
   */
  isLoading?: boolean;
}

export const Loading: React.FC<ILoadingProps> = (props): JSX.Element => {
  const { isLoading, ...rest } = props;

  return (
    <Box
      visibility={isLoading ? 'visible' : 'hidden'}
      zIndex={isLoading ? 'docked' : 'hide'}
      {...rest}
    >
      <Flex
        align="center"
        backdropFilter="blur(3px)"
        h="100%"
        justify="center"
        w="100%"
      >
        <Spinner ml={{ base: 0, lg: '280px' }} />
      </Flex>
    </Box>
  );
};

Loading.defaultProps = {
  bg: 'rgba(0, 0, 0, 0.01)',
  h: '100%',
  left: 0,
  position: 'absolute',
  rounded: 'md',
  top: 0,
  w: '100%',
};
