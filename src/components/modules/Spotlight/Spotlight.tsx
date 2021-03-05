import { Box } from '@chakra-ui/react';

import { use100vh } from 'react-div-100vh';

import Container from 'components/elements/Container';

import FloatingBox from './components/FloatingBox';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';

function Spotlight() {
  const height = use100vh();
  return (
    <Container isFluid bg="base" d="flex" h={`${height}px`}>
      <FloatingBox>
        <Heading>Lorem Ipsum</Heading>
        <Box bg="white" h="1.5px" mb={4} mx="auto" w={10}></Box>
        <SubHeading>
          Neque porro quisquam est qui dolorem ipsum, consectetur, adipisci velit garamond
        </SubHeading>
      </FloatingBox>
    </Container>
  );
}

export default Spotlight;
