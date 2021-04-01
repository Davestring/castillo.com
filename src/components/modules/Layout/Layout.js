import Footer from 'components/modules/Footer';
import Header from 'components/modules/Header';
import PropTypes from 'prop-types';

import ISOContainer from './components/ISOContainer';
import Wrapper from './components/Wrapper';

function Layout(props) {
  const { children, translations: t, ...rest } = props;
  return (
    <Wrapper {...rest}>
      <Header as="header"></Header>
      <ISOContainer as="main">{children}</ISOContainer>
      <Footer as="footer" mb={4} translations={t}></Footer>
    </Wrapper>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
  translations: PropTypes.func,
};

Layout.defaultProps = {
  translations: () => '',
};

export default Layout;
