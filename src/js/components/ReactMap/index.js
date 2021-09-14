import React from 'react';
import {
  compose,
  withProps,
  lifecycle,
} from 'recompose';
import { connect } from 'react-redux';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';
import SearchBox from 'react-google-maps/lib/components/places/SearchBox';
import {
  GOOGLE_API_KEY,
  COMPANY_LOCATION,
  MAP_CENTER,
} from '../../constants';
import InputBox from './InputBox';
import './map.scss';

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '600px', width: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillMount() {
      const refs = {};
      this.setState({
        center: MAP_CENTER,
        markers: [],
        onSearchBoxMounted: (ref) => {
          refs.searchBox = ref;
        },
        onPlacesChanged: () => {
          const places = refs.searchBox.getPlaces();
          if (places && places[0]) {
            return this.state.buildRoute(places[0].geometry.location);
          }

          return false;
        },
        buildRoute: (location) => {
          const lat = location.lat();
          const lng = location.lng();
          const DirectionsService = new window.google.maps.DirectionsService();
          DirectionsService.route({
            origin: new window.google.maps.LatLng(lat, lng),
            destination: new window.google.maps.LatLng(COMPANY_LOCATION.lat, COMPANY_LOCATION.lng),
            travelMode: window.google.maps.TravelMode.TRANSIT,
          }, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            } else {
              // console.error(`error fetching directions ${result}`);
            }
          });
        }, // build route
      });
    }, // compWillMount
  }),
)((props) => {
  const { ControlPosition, MapTypeControlStyle } = window.google.maps;
  const COORDS = props.res.width <= 1279 ? 'TOP_RIGHT' : 'RIGHT_CENTER';
  return (
    <GoogleMap
      defaultZoom={15}
      defaultCenter={props.center}
      options={{
        mapTypeControl: false,
        mapTypeControlOptions: {
          style: MapTypeControlStyle.HORIZONTAL_BAR,
          position: ControlPosition.TOP_LEFT,
        },
        zoomControl: false,
        zoomControlOptions: {
          position: ControlPosition.CENTER_RIGHT,
        },
        scaleControl: false,
        streetViewControl: false,
        streetViewControlOptions: {
          position: ControlPosition.TOP_LEFT,
        },
        fullscreenControl: true,
        fullscreenControlOptions: {
          position: ControlPosition.RIGHT_TOP,
        },
      }}
    >
      <SearchBox
        ref={props.onSearchBoxMounted}
        controlPosition={ControlPosition[COORDS]}
        onPlacesChanged={props.onPlacesChanged}
      >
        <InputBox
          onSend={props.onPlacesChanged}
        />
      </SearchBox>
      {props.children}
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  );
});

export default connect(
  store => ({ res: store.response }),
  null,
)(MapWithADirectionsRenderer);
