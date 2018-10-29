import React, { Component } from "react";
import Header from "./components/Header/index.jsx";
import Container from "./components/Container/index.jsx";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Container />
      </div>
    );
  }
}

export default App;
