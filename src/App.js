import React, { Component } from "react";
import "./App.css";
import Foot from "./components/Foot";
import Head from "./components/Head";
import ReactGoogleMaps from "./components/ReactGoogleMaps";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Head />
        <ReactGoogleMaps />
        <Foot />
      </div>
    );
  }
}

export default App;
