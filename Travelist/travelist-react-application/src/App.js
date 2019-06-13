import React, { Component } from 'react';
import DestinationsContainer from './containers/DestinationsContainer';

class App extends Component {

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/users/1")
      .then(r => r.json())
      .then(console.log())
  }
  render() {
    return (
      <div className="App">
        <DestinationsContainer />
      </div>
    );
  }
};

export default App
























