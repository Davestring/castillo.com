import { Stack } from '@chakra-ui/react';
import NavLink from 'components/elements/NavLink';
import isEmpty from 'lodash/isEmpty';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

function Navigation(props) {
  const { routes, ...rest } = props;

  if (isEmpty(routes)) return null;

  return (
    <Stack {...rest}>
      {routes.map((item) => (
        <NavLink key={nanoid()} {...item}></NavLink>
      ))}
    </Stack>
  );
}

Navigation.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    }),
  ),
};

Navigation.defaultProps = {
  isInline: true,
  height: '100%',
  routes: [],
};

export default Navigation;
