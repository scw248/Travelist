import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUserActions'
import DestinationsContainer from './containers/DestinationsContainer';
import NavBar from './components/NavBar'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  // <DestinationsContainer /> ADD THIS BACK IN

  render() {
    return (
      <NavBar />
    );
  }
};


export default connect(null, { getCurrentUser })(App)
























