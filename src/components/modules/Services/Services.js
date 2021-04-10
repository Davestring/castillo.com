import { Button, Flex, SimpleGrid } from '@chakra-ui/react';
import Container from 'components/elements/Container';
import _ from 'lodash';
import { nanoid } from 'nanoid';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';

import Service from './components/Service';

function Services(props) {
  const { services, ...rest } = props;
  const { t } = useTranslation('properties');

  if (_.isEmpty(services)) return null;

  return (
    <Container isFluid {...rest}>
      <Container py={20}>
        <SimpleGrid columns={[1, 1, 2, 3]} spacing={12}>
          {services.map((item) => (
            <Service key={nanoid()} {...item}></Service>
          ))}
        </SimpleGrid>
        <Flex justify="center" mt={12}>
          <Button colorScheme="golden" px={8} size="sm">
            {t('properties.services.load')}
          </Button>
        </Flex>
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
    }),
  ),
};

Services.defaultProps = {
  services: [],
};

export default Services;
