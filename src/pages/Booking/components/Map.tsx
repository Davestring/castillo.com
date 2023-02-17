import { Box, BoxProps, Icon } from '@chakra-ui/react';
import { useState } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import ReactMapGL, { Marker, NavigationControl, ViewState } from 'react-map-gl';

export type IBaseMapProps = Omit<Partial<ViewState>, 'padding'>;

export interface IMapProps extends BoxProps, IBaseMapProps {
  /**
   * Map style.
   */
  mapStyle?: string;
}

export const Map: React.FC<IMapProps> = (props) => {
  const { latitude, longitude, mapStyle, zoom, ...rest } = props;

  const [viewState, setViewState] = useState<Partial<ViewState>>({
    latitude,
    longitude,
    zoom,
  });

  return (
    <Box {...rest}>
      <ReactMapGL
        mapStyle={mapStyle}
        onMove={(evt) => setViewState(evt.viewState)}
        scrollZoom={false}
        {...viewState}
      >
        <Marker anchor="bottom" latitude={latitude} longitude={longitude}>
          <Icon as={FaMapMarkerAlt} color="primary" h={8} w={8} />
        </Marker>

        <NavigationControl position="top-right" />
      </ReactMapGL>
    </Box>
  );
};

Map.defaultProps = {
  mapStyle: 'mapbox://styles/mapbox/light-v11',
  zoom: 14,
};
