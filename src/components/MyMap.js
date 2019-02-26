import React from 'react';
import { compose, withProps } from 'recompose';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MyMap = compose(
  withProps({
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '100vh' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withGoogleMap,
)(props => (
  <div>
    {props.defaultCenter && (
      <GoogleMap defaultZoom={16} defaultCenter={props.defaultCenter}>
        {props.defaultCenter && <Marker position={props.defaultCenter} />}
      </GoogleMap>
    )}
  </div>
));

export default MyMap;
