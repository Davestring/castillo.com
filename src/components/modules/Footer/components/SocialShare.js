import { Icon, Link, Stack } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import { Link as ReachLink } from 'next/link';
import PropTypes from 'prop-types';

function SocialShare(props) {
  const { social, ...rest } = props;

  if (!Array.isArray(social) || social.lenght === 0) return null;

  return (
    <Stack {...rest}>
      {social.map(({ icon, url }) => (
        <Link as={ReachLink} isExternal href={url} key={nanoid()}>
          <Icon as={icon} color="base" h={6} w={6}></Icon>
        </Link>
      ))}
    </Stack>
  );
}

SocialShare.propTypes = {
  social: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      icon: PropTypes.elementTyppe,
      url: PropTypes.string,
    }),
  ),
};

SocialShare.defaultProps = {
  isInline: true,
  social: [],
  spacing: { base: 8, md: 4 },
};

export default SocialShare;
