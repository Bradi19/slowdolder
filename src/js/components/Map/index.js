import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  GoogleApiWrapper,
  Map,
  InfoWindow,
  Marker,
} from 'google-maps-react';
import { GOOGLE_API_KEY, COMPANY_LOCATION } from '../../constants';

import '../../../scss/contacts.scss';

class MapContainer extends PureComponent {
  static propTypes = {
    google: PropTypes.shape({
      maps: PropTypes.shape({}).isRequired,
    }).isRequired,
  };
  constructor(props) {
    super(props);

    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    };
  }
  onMarkerClick = (props, marker) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });
  };
  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };
  render() {
    return (
      <div className="contacts__map_container">
        <Map
          initialCenter={COMPANY_LOCATION}
          google={this.props.google}
          onClick={this.onMapClicked}
        >
          <Marker
            onClick={this.onMarkerClick}
            title="Tooltip"
            name="INTShop"
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_API_KEY,
  language: 'ru'
})(MapContainer);
