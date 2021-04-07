import { Button, Flex } from '@chakra-ui/react';

function LoadMore(props) {
  const { ...rest } = props;

  return (
    <Flex {...rest}>
      <Button colorScheme="blackAlpha" px={8} size="sm" variant="outline">
        Ver todas las reseñas
      </Button>
    </Flex>
  );
}

LoadMore.defaultProps = {
  justify: 'center',
};

export default LoadMore;
