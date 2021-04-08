import { Box, Text } from '@chakra-ui/react';
import { Head } from 'components/behaviours/Shareability';
import Map from 'components/collections/Map';
import Container from 'components/elements/Container';
import H1 from 'components/elements/H1';
import H2 from 'components/elements/H2';
import Stats from 'components/elements/Stats';
import { BookingBanner, BookingCard } from 'components/modules/Booking';
import Layout from 'components/modules/Layout';
import Reviews from 'components/modules/Reviews';
import Services from 'components/modules/Services';
import _ from 'lodash';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import PropertyResources from 'services/resources/property';

export const getStaticProps = async ({ params }) => {
  let property = await PropertyResources.findByID(params.id);
  let services = await PropertyResources.findPropertyServices(params.id);
  let comments = await PropertyResources.findPropertyComments(params.id);

  property = _.omit(property, 'id', 'active', 'created', 'updated');
  services = _.map(services, (item) => _.pick(item, ['title', 'description']));
  comments = _.map(comments, (item) =>
    _.pick(item, ['name', 'lastname', 'comment', 'created']),
  );

  return { props: { comments, property, services } };
};

export const getStaticPaths = async () => {
  const response = await PropertyResources.findAll();
  const paths = response?.data?.map((item) => ({
    params: { id: item?.id?.toString() },
  }));
  return { paths, fallback: false };
};

function Property(props) {
  const { comments, property, services } = props;
  const [ref, inView] = useInView({
    root: null,
    threshold: 0,
  });

  return (
    <>
      <Head
        title={`Casa Castillo - ${property?.title}`}
        description={property?.description}
      ></Head>

      <Layout position="relative">
        <div ref={ref} id="content">
          <Container as="article" d="flex" mb={12} mt={4}>
            <Box as="section" flex={2}>
              <H1>{property?.title}</H1>
              <Stats mb={12}></Stats>

              <H2>acerca de esta propiedad</H2>
              <Text align="justify" fontSize="sm" mb={12}>
                {property?.description}
              </Text>

              <H2 id="location">ubicación</H2>
              <Map></Map>
            </Box>
            <BookingCard as="aside" flex={1}></BookingCard>
          </Container>
        </div>

        <Services
          as="section"
          bg="primary"
          id="services"
          mb={12}
          services={services}
        ></Services>

        <Reviews
          as="section"
          comments={comments}
          id="reviews"
          mb={12}
          title="Reseñas"
        ></Reviews>

        <Container as="section" mb={12}>
          <H2>reglas</H2>
        </Container>

        <BookingBanner
          display={!inView ? { base: 'none', lg: 'block' } : 'none'}
          inView={!inView}
        ></BookingBanner>
      </Layout>
    </>
  );
}

Property.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      lastname: PropTypes.string,
      comment: PropTypes.string,
      created: PropTypes.string,
    }),
  ),
  property: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    cover: PropTypes.string,
    rating: PropTypes.number,
    address: PropTypes.shape({
      id: PropTypes.number,
      street: PropTypes.string,
      number: PropTypes.string,
      zipCode: PropTypes.number,
      colony: PropTypes.string,
      municipality: PropTypes.string,
      state: PropTypes.string,
      country: PropTypes.string,
      references: PropTypes.string,
      created: PropTypes.string,
      updated: PropTypes.string,
    }),
  }),
  services: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
    }),
  ),
};

Property.defaultProps = {
  comments: [],
  property: {},
  services: [],
};

export default Property;
