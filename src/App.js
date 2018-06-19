import React, { Component } from "react";
//import logo from "./logo.svg";
import "./App.css";
//import Popup from "reactjs-popup";

import AlertDialogSlide from './components/Dialog';
import ControlledOpenSelect from './components/Select';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>TODO List</h1>
    <AlertDialogSlide />
    <ControlledOpenSelect />
      </div>
    );
  }
}

export default App;
