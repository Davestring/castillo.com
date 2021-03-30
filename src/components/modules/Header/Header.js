import { Box } from '@chakra-ui/react';
import Container from 'components/elements/Container';

import Logo from './components/Logo';
import Navigation from './components/Navigation';

const ROUTES = [
  {
    title: 'Properties',
    url: '/properties',
  },
];

function Header(props) {
  const { ...rest } = props;

  return (
    <Box {...rest}>
      <Container
        as="nav"
        alignItems="center"
        display="flex"
        h={16}
        justifyContent="space-between"
      >
        <Logo></Logo>
        <Navigation routes={ROUTES}></Navigation>
      </Container>
    </Box>
  );
}

Header.defaultProps = {
  bg: 'white',
  boxShadow: 'md',
  height: 16,
  position: 'fixed',
  width: '100%',
  zIndex: 100,
};

export default Header;
