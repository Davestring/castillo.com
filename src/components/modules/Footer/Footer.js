import Container from 'components/elements/Container';
import Divider from 'components/elements/Divider';
import PropTypes from 'prop-types';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

import Copyright from './components/Copyright';
import Notice from './components/Notice';
import ResponsiveFlex from './components/ResponsiveFlex';
import SocialShare from './components/SocialShare';

function Footer(props) {
  const { social, ...rest } = props;

  return (
    <Container isFluid {...rest}>
      <Divider bg="gray.300" mb={4} minW="100%"></Divider>
      <Container>
        <ResponsiveFlex align="center" justify="space-between" mb={4}>
          <SocialShare social={social} mb={{ base: 4, md: 0 }}></SocialShare>
          <Notice></Notice>
        </ResponsiveFlex>
        <Copyright></Copyright>
      </Container>
    </Container>
  );
}

Footer.propTypes = {
  social: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementTyppe,
      url: PropTypes.string,
    }),
  ),
};

Footer.defaultProps = {
  social: [
    {
      url: 'https://facebook.com/Casa-Castillo-Oaxtepec-101933198569474/',
      icon: FaFacebookF,
    },
    {
      url: 'https://youtube.com/channel/UCt3raKd0mjAfguhVV-ui-LQ/',
      icon: FaYoutube,
    },
  ],
};

export default Footer;
