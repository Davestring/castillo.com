import { Link } from '@chakra-ui/react';
import { Link as ReachLink } from 'next/link';
import PropTypes from 'prop-types';

const Redirect = (props) => {
  const { href, children, ...rest } = props;
  return (
    <Link as={ReachLink} href={href} {...rest}>
      {children}
    </Link>
  );
};

Redirect.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
};

Redirect.defaultProps = {
  color: 'base',
  fontSize: 'xs',
};

export default Redirect;
