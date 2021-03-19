import Container from 'components/elements/Container';
import Divider from 'components/elements/Divider';
import PropTypes from 'prop-types';

import Copyright from './components/Copyright';
import Notice from './components/Notice';
import ResponsiveFlex from './components/ResponsiveFlex';
import SocialShare from './components/SocialShare';

function Footer(props) {
  const { translations: t, social, ...rest } = props;

  return (
    <Container isFluid {...rest}>
      <Divider bg="gray.300" mb={4} minW="100%"></Divider>
      <Container>
        <ResponsiveFlex align="center" justify="space-between" mb={4}>
          <SocialShare social={social} mb={{ base: 4, md: 0 }}></SocialShare>
          <Notice translations={t}></Notice>
        </ResponsiveFlex>
        <Copyright translations={t}></Copyright>
      </Container>
    </Container>
  );
}

Footer.propTypes = {
  social: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.elementTyppe,
      url: PropTypes.string,
    }),
  ),
  translations: PropTypes.func,
};

Footer.defaultProps = {
  social: [],
  translations: () => '',
};

export default Footer;
