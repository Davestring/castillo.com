import { Box } from '@chakra-ui/react';
import Container from 'components/elements/Container';
import PropTypes from 'prop-types';

import Logo from './components/Logo';
import Navigation from './components/Navigation';

const ROUTES = [
  {
    title: 'Properties',
    url: '/properties',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
];

function Header(props) {
  const { routes, ...rest } = props;

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
        <Navigation routes={routes}></Navigation>
      </Container>
    </Box>
  );
}

Header.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

Header.defaultProps = {
  bg: 'white',
  boxShadow: 'md',
  height: 16,
  position: 'fixed',
  routes: ROUTES,
  width: '100%',
  zIndex: 100,
};

export default Header;
