import { Icon, Stack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

function FeatureCard(props) {
  const { icon, iconColor, title, description, ...rest } = props;

  return (
    <Stack align="center" justify="center" {...rest}>
      <Icon as={icon} color={iconColor} h={20} w={20}></Icon>
      <Text fontWeight="700" textAlign="center">
        {title}
      </Text>
      <Text fontFamily="mono" textAlign="justify">
        {description}
      </Text>
    </Stack>
  );
}

FeatureCard.propTypes = {
  icon: PropTypes.elementType,
  iconColor: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
};

FeatureCard.defaultProps = {
  iconColor: 'gold',
};

export default FeatureCard;
