import { Icon, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { SiNextDotJs } from 'react-icons/si';

function Service(props) {
  const { icon, iconColor, title, description, ...rest } = props;

  return (
    <Stack {...rest}>
      <Icon as={icon} color={iconColor} h={16} w={16}></Icon>
      <Text fontWeight="700" textAlign="center">
        {title}
      </Text>
      <Text fontFamily="mono" fontSize="sm" textAlign="justify">
        {description}
      </Text>
    </Stack>
  );
}

Service.propTypes = {
  icon: PropTypes.elementType,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

Service.defaultProps = {
  align: 'center',
  justify: 'center',
  icon: SiNextDotJs,
  iconColor: 'gold',
};

export default Service;
