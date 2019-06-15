import React, { Component } from 'react';
import './App.css'
import Login from './components/Login'
import DestinationsContainer from './containers/DestinationsContainer';

class App extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div className="App">
        {/* <DestinationsContainer /> */}
        <Login />
      </div>
    );
  }
};

export default App
























