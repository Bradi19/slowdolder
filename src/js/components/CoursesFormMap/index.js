import React from 'react';
import {
  compose,
  withProps,
  lifecycle,
} from 'recompose';
import { Translate } from 'react-redux-i18n';
import { connect } from 'react-redux';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  DirectionsRenderer,
} from 'react-google-maps';
import {
  GOOGLE_API_KEY,
  COMPANY_LOCATION_FORM,
  MAP_FORM,
  MAP_MOBILE
} from '../../constants';
import './map.scss';

const MapWithADirectionsRenderer = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_API_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div style={{ height: '525px', width: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
  lifecycle({
    componentWillMount() {
      this.setState({
        center: MAP_FORM,
        markers: [],
        onPlacesChanged: () => {
          const getPosition = options => {
            return new Promise((resolve, reject) => {
              navigator.geolocation.getCurrentPosition(resolve, reject, options);
            });
          };
          getPosition()
          .then(el => this.state.buildRoute(el))
          .catch(ex => console.error(ex));
        },
        buildRoute: (location) => {
          const DirectionsService = new window.google.maps.DirectionsService();
          DirectionsService.route({
            origin: new window.google.maps.LatLng(location.coords.latitude, location.coords.longitude),
            destination: new window.google.maps.LatLng(COMPANY_LOCATION_FORM.lat, COMPANY_LOCATION_FORM.lng),
            travelMode: window.google.maps.TravelMode.TRANSIT,
          }, (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              this.setState({
                directions: result,
              });
            }
          });
        },
      });
    }, // compWillMount
  }),
)((props) => {
  const { ControlPosition, MapTypeControlStyle } = window.google.maps;
  return (
    <GoogleMap
      defaultZoom={17.14}
      defaultCenter={props.res.width > 1001 ? props.center : MAP_MOBILE}
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
      <div className="button_block">
        <div
          className="button_location"
          onClick={props.onPlacesChanged}
        >
          <Translate value="courses.map.button" />
        </div>
      </div>
      {props.children}
      {props.directions && <DirectionsRenderer directions={props.directions} />}
    </GoogleMap>
  );
});

export default connect(
  store => ({ res: store.response }),
  null,
)(MapWithADirectionsRenderer);
