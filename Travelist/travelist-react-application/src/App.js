import React, { Component } from 'react';
import './App.css'
import Login from './components/Login'
import DestinationsContainer from './containers/DestinationsContainer';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUserActions'

class App extends Component {

  componentDidMount() {
    getCurrentUser()
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

export default connect(null, { getCurrentUser })(App)
























