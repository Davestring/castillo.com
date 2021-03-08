import { SimpleGrid } from '@chakra-ui/layout';
import Container from 'components/elements/Container';
import _ from 'lodash';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import FeatureCard from './components/FeatureCard';

function Features(props) {
  const { features, ...rest } = props;

  if (_.isEmpty(features)) return null;

  return (
    <Container isFluid {...rest}>
      <Container py={20}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={12}>
          {features.map((item) => (
            <FeatureCard key={nanoid()} {...item}></FeatureCard>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
}

Features.propTypes = {
  features: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      title: PropTypes.string,
      description: PropTypes.string,
      iconColor: PropTypes.string,
    }),
  ),
};

Features.defaultProps = {
  features: [],
};

export default Features;
