import { Icon } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { Marker as MapMarker } from 'react-map-gl';

function Marker(props) {
  const { latitude, longitude, ...rest } = props;

  return (
    <MapMarker latitude={latitude} longitude={longitude} {...rest}>
      <Icon as={FaMapMarkerAlt} color="base" h={8} w={8}></Icon>
    </MapMarker>
  );
}

Marker.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
};

Marker.defaultProps = {
  latitude: 0,
  longitude: 0,
  offsetLeft: -20,
  offsetTop: -30,
};

export default Marker;
