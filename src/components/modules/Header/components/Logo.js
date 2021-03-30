import { Image, Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'next/link';
import PropTypes from 'prop-types';

function Logo(props) {
  const { alt, href, logo } = props;

  return (
    <Link as={ReachLink} href={href}>
      <Image alt={alt} src={logo} w={160}></Image>
    </Link>
  );
}

Logo.propTypes = {
  alt: PropTypes.string,
  href: PropTypes.string,
  logo: PropTypes.string,
};

Logo.defaultProps = {
  alt: 'castillo-logo',
  href: '/',
};

export default Logo;
