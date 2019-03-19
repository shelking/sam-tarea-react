import React, { Component } from "react";
import Navegacion from "./components/navegacion";
import Persona from "./components/personas";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <Persona />
        <Navegacion />
      </div>
    );
  }
}

export default App;
