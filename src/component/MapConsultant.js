import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from './CurrentPoint';

class MapConsultant extends Component {
  state = {
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {}
  };

  onMarkerClick = (props, marker) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    const { showingInfoWindow, activeMarker, selectedPlace } = this.state;
    const { consultants } = this.props;

    return (
      <CurrentLocation centerAroundCurrentLocation google={this.props.google}>
        {consultants.map(consultant => {
          return (
          <Marker
            key={consultant.name}
            onClick={this.onMarkerClick}
            name={consultant.name}
            position={consultant.coordinates} />
          )
        }
          // console.log(consultant.coordinates)
        )}

        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={this.onClose}
        >
          <h6 className="m-0">{selectedPlace.name}</h6>
        </InfoWindow>
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBnOC2cYnLyaaYXtnd_IEQWZLkqvg0tqoE'
})(MapConsultant);