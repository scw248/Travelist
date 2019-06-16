import React, { Component } from 'react';
import './App.css'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUserActions'
import DestinationsContainer from './containers/DestinationsContainer';
import NavBarContainer from './containers/NavBarContainer'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <div className="App">
        <NavBarContainer />
        <DestinationsContainer />
      </div>
    );
  }
};


export default connect(null, { getCurrentUser })(App)
























