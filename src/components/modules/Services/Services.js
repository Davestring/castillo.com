import { SimpleGrid } from '@chakra-ui/layout';
import Container from 'components/elements/Container';
import _ from 'lodash';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import ServiceCard from './components/ServiceCard';

function Services(props) {
  const { services, ...rest } = props;

  if (_.isEmpty(services)) return null;

  return (
    <Container isFluid {...rest}>
      <Container py={20}>
        <SimpleGrid columns={[{ base: 1, md: 2, lg: 3 }]} spacing={12}>
          {services.map((item) => (
            <ServiceCard key={nanoid()} {...item}></ServiceCard>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
}

Services.propTypes = {
  services: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.elementType,
      title: PropTypes.string,
      description: PropTypes.string,
      iconColor: PropTypes.string,
    }),
  ),
};

Services.defaultProps = {
  services: [],
};

export default Services;
