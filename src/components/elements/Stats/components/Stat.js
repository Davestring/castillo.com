import { Icon, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { SiNextDotJs } from 'react-icons/si';

function Stat(props) {
  const { icon, stat } = props;

  return (
    <Stack isInline spacing={1}>
      <Text as="span" fontSize="sm">
        {stat}
      </Text>
      <Icon as={icon} h={4} w={4}></Icon>
    </Stack>
  );
}

Stat.propTypes = {
  icon: PropTypes.elementType,
  stat: PropTypes.number,
};

Stat.defaultProps = {
  icon: SiNextDotJs,
  stat: 0,
};

export default Stat;
