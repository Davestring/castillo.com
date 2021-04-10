import Footer from 'components/modules/Footer';
import Header from 'components/modules/Header';
import PropTypes from 'prop-types';

import ISOContainer from './components/ISOContainer';
import Wrapper from './components/Wrapper';

function Layout(props) {
  const { children, ...rest } = props;
  return (
    <Wrapper {...rest}>
      <Header as="header"></Header>
      <ISOContainer as="main">{children}</ISOContainer>
      <Footer as="footer" mb={4}></Footer>
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

Layout.defaultProps = {};

export default Layout;
