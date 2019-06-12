import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';
import { fetchDestinations } from './actions/destinationActions.js'
import './App.css'

class App extends Component {

  componentDidMount() {
    this.props.fetchDestinations()
  }

  render() {
    return (
      <div className="App">
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Destinations</a>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <destinationsContainer destinationPics={this.props.destinationPics} />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { destinationPics: state.destination.pictures };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchDestinations: () => { dispatch(fetchDestinations()) }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App)
