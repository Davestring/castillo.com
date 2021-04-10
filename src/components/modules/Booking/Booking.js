import { Box, Button, Stack } from '@chakra-ui/react';
import Calendar from 'components/collections/Calendar';
import Container from 'components/elements/Container';
import NavLink from 'components/elements/NavLink';
import { nanoid } from 'nanoid';
import { useTranslation } from 'next-i18next';
import PropTypes from 'prop-types';

import Banner from './components/Banner';
import Card from './components/Card';
import Info from './components/Info';

const ROUTES = [
  {
    title: 'Content',
    url: '#content',
  },
  {
    title: 'Location',
    url: '#location',
  },
  {
    title: 'Services',
    url: '#services',
  },
  {
    title: 'Reviews',
    url: '#reviews',
  },
];

export function BookingBanner(props) {
  const { inView, routes, ...rest } = props;
  const { t } = useTranslation('booking');

  return (
    <Banner as="nav" mt={inView ? 0 : '-4rem'} {...rest}>
      <Container d="flex" h="100%" justifyContent="space-between">
        <Stack isInline align="center" h="100%">
          {routes.map((item) => (
            <NavLink key={nanoid()} h="100%" {...item}></NavLink>
          ))}
        </Stack>
        <Stack isInline align="center">
          <Calendar></Calendar>
          <Button colorScheme="golden" size="sm">
            {t('booking.button')}
          </Button>
        </Stack>
      </Container>
    </Banner>
  );
}

BookingBanner.propTypes = {
  inView: PropTypes.bool,
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

BookingBanner.defaultProps = {
  inView: false,
  routes: ROUTES,
};

export function BookingCard(props) {
  const { price, rating, ...rest } = props;
  const { t } = useTranslation('booking');

  return (
    <Card d={{ base: 'none', lg: 'flex' }} {...rest}>
      <Box>
        <Info price={price} rating={rating}></Info>
        <Calendar></Calendar>
      </Box>
      <Button colorScheme="golden" size="sm">
        {t('booking.button')}
      </Button>
    </Card>
  );
}

BookingCard.propTypes = {
  price: PropTypes.number,
  rating: PropTypes.number,
};

BookingCard.defaultProps = {
  price: 0,
  rating: 0,
};
