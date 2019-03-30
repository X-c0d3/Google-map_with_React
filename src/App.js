import React, { Component } from "react";
//import MapContainer from "./components/MapContainer/MapContainer";
import GoogleMapsContainer from './components/MapContainer/GoogleMapsContainer'
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div>
          <GoogleMapsContainer />
        </div>
      </div>
    );
  }
}

export default App;
