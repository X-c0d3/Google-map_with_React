import React from "react";
import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
//import Paper from 'material-ui/Paper';
//import Typography from 'material-ui/Typography';
//import { typography } from 'material-ui/styles';

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

    //13.7466304,100.5371411
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

          {/* <Paper>
            <Typography
              variant = 'headline'
              component = 'h4'
            >
              Changing Colors Garage
            </Typography>
            <Typography
              component = 'p'
            >
              98G Albe Dr Newark, DE 19702 <br />
              302-293-8627
            </Typography>
          </Paper> */}
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  // Please change to you api key 
  apiKey: "AIzaSyC8QaFjg-_xxxxxxxxxxxxxxxxx",
  v: "3"
})(GoogleMapsContainer);
