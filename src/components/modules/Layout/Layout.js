import Footer from 'components/modules/Footer';
import Header from 'components/modules/Header';
import PropTypes from 'prop-types';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';

import ISOContainer from './components/ISOContainer';
import Wrapper from './components/Wrapper';

const SOCIAL_SHARE = [
  {
    id: 'fb',
    url: 'https://facebook.com/',
    icon: FaFacebookF,
  },
  {
    id: 'ig',
    url: 'https://instagram.com/',
    icon: FaInstagram,
  },
  {
    id: 'yt',
    url: 'https://youtube.com/',
    icon: FaYoutube,
  },
];

function Layout(props) {
  const { children, translations: t, ...rest } = props;
  return (
    <Wrapper {...rest}>
      <Header as="header"></Header>
      <ISOContainer as="main">{children}</ISOContainer>
      <Footer
        as="footer"
        social={SOCIAL_SHARE}
        mb={4}
        translations={t}
      ></Footer>
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
