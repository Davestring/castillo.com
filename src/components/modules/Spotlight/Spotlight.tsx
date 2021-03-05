import { use100vh } from 'react-div-100vh';

import Container from 'components/elements/Container';
import Divider from 'components/elements/Divider';
import FloatingBox from './components/FloatingBox';
import Heading from './components/Heading';
import SubHeading from './components/SubHeading';

function Spotlight() {
  const height = use100vh();
  return (
    <Container isFluid bg="base" d="flex" h={`${height}px`}>
      <FloatingBox>
        <Heading>Lorem Ipsum</Heading>
        <Divider bg="white" mb={4} />
        <SubHeading>
          Neque porro quisquam est qui dolorem ipsum, consectetur, adipisci velit garamond
        </SubHeading>
      </FloatingBox>
    </Container>
  );
}

export default Spotlight;
