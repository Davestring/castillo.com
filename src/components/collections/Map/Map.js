import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';

import Marker from './components/Marker';
import Navigation from './components/Navigation';

function Map(props) {
  const { latitude, longitude, mapH, mapW, style, zoom, ...rest } = props;

  const [viewport, setViewport] = useState({
    height: mapH,
    width: mapW,
    latitude,
    longitude,
    zoom,
  });

  return (
    <Box {...rest}>
      <ReactMapGL
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        mapStyle={style}
        cont
        onViewportChange={(vp) => setViewport(vp)}
        scrollZoom={false}
        {...viewport}
      >
        <Marker latitude={latitude} longitude={longitude}></Marker>
        <Navigation></Navigation>
      </ReactMapGL>
    </Box>
  );
}

Map.propTypes = {
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  mapH: PropTypes.string,
  mapW: PropTypes.string,
  style: PropTypes.string,
  zoom: PropTypes.number,
};

Map.defaultProps = {
  mapH: '512px',
  mapW: '100%',
  style: 'mapbox://styles/mapbox/light-v10',
  zoom: 18,
};

export default Map;
