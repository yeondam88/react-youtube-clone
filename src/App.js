import React, { Component } from "react";
import Container from "./containers/Container";
import { Header } from "./components";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="spacer" />
        <Container />
      </div>
    );
  }
}

export default App;
