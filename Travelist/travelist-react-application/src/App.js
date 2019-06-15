import React, { Component } from 'react';
import './App.css'
import Login from './components/Login'
import Logout from "./components/Logout.js"
import DestinationsContainer from './containers/DestinationsContainer';
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUserActions'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  // <DestinationsContainer /> ADD THIS BACK IN

  render() {
    return (


      this.props.currentUser ? <Logout /> : <Login />

    );
  }
};

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App)
























