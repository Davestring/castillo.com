import PropTypes from 'prop-types';
import { NavigationControl } from 'react-map-gl';

function Navigation(props) {
  const { style } = props;

  return <NavigationControl style={style}></NavigationControl>;
}

Navigation.propTypes = {
  style: PropTypes.shape({}),
};

Navigation.defaultProps = {
  style: {
    right: 10,
    top: 10,
  },
};

export default Navigation;
