import { Stack, Text } from '@chakra-ui/react';
import { Head } from 'components/behaviours/Shareability';
import Map from 'components/collections/Map';
import Container from 'components/elements/Container';
import H1 from 'components/elements/H1';
import H2 from 'components/elements/H2';
import Share from 'components/elements/Share';
import Stats from 'components/elements/Stats';
import { BookingBanner, BookingCard } from 'components/modules/Booking';
import Gallery from 'components/modules/Gallery';
import Layout from 'components/modules/Layout';
import Reviews from 'components/modules/Reviews';
import Services from 'components/modules/Services';
import _ from 'lodash';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import PropertyResources from 'services/resources/property';
import { spotlight } from 'utils/spotlight-grid';

export const getStaticProps = async ({ locale, params }) => {
  let property = await PropertyResources.findByID(params.id);
  let services = await PropertyResources.findPropertyServices(params.id);
  let comments = await PropertyResources.findPropertyComments(params.id);
  let gallery = await PropertyResources.findPropertyGallery(params.id);

  property = _.omit(property, 'id', 'active', 'created', 'updated');
  services = _.map(services, (item) => _.pick(item, ['title', 'description']));
  comments = _.map(comments, (item) =>
    _.pick(item, ['name', 'lastname', 'comment', 'created']),
  );
  gallery = _.map(gallery, (item) => _.pick(item, ['image']));

  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'booking',
        'common',
        'footer',
        'properties',
      ])),
      comments,
      gallery,
      property,
      services,
    },
  };
};

export const getStaticPaths = async () => {
  const response = await PropertyResources.findAll();
  const paths = response?.data?.map((item) => ({
    params: { id: item?.id?.toString() },
  }));
  return { paths, fallback: false };
};

function Property(props) {
  const { comments, gallery, property, services } = props;
  const { t } = useTranslation('properties');

  const [ref, inView] = useInView({ threshold: 0 });

  return (
    <>
      <Head {..._.pick(property, ['title', 'description'])}></Head>

      <Layout>
        <BookingBanner d={{ base: 'none', lg: 'block' }} inView={!inView} />

        <section id="content" ref={ref}>
          <Container my={12}>
            <H1>{property?.title}</H1>

            <Stack isInline justify="space-between" mb={4}>
              <Stats {..._.pick(property, ['bathrooms', 'beds', 'guests'])} />
              <Share></Share>
            </Stack>

            <Gallery
              cols="repeat(6, 1fr)"
              content={spotlight(gallery)}
              gridH="420px"
              isFluid
              rows="repeat(4, 1fr)"
            ></Gallery>
          </Container>

          <Container display="flex" mb={12}>
            <Stack>
              <H2>{t('properties.description')}</H2>
              <Text align="justify" fontSize="sm" mb={12}>
                {property?.description}
              </Text>
              <H2 id="location">{t('properties.location')}</H2>
              <Map {..._.pick(property, ['latitude', 'longitude'])}></Map>
            </Stack>

            <BookingCard {..._.pick(property, ['price', 'routing'])} />
          </Container>
        </section>

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
          <H2>{t('properties.rules')}</H2>
        </Container>
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
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
    }),
  ),
  property: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    cover: PropTypes.string,
    rating: PropTypes.number,
    price: PropTypes.number,
    beds: PropTypes.number,
    bathrooms: PropTypes.number,
    rooms: PropTypes.number,
    guests: PropTypes.number,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
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
  gallery: [],
  property: {},
  services: [],
};

export default Property;
