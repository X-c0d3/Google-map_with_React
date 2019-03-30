npx create-react-app googlemap-react
yarn add google-maps-react

##########################################################################
import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";

class GoogleMapsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };

    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };
  onMapClick = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    const style = {
      width: "700px",
      height: "600px",
      marginLeft: "auto",
      marginRight: "auto"
    };

    //test lat & long
    let locations = {
      lat: 13.7466304,
      lng: 100.5371411
    };

    return (
      <Map
        item
        xs={12}
        style={style}
        google={this.props.google}
        onClick={this.onMapClick}
        zoom={16}
        initialCenter={locations}
      >
        <Marker
          onClick={this.onMarkerClick}
          title={"Changing Colors Garage"}
          position={locations}
          name={"Central World, Rama I Road, Pathum Wan, Bangkok"}
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
    );
  }
}

export default GoogleApiWrapper({
  // Please change to you api key 
  apiKey: "xxxxxxxxxx-_xxxxxxxxxxxxxxxxx",
  v: "3"
})(GoogleMapsContainer);
##########################################################################


yarn start