import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUserActions'
import DestinationsContainer from './containers/DestinationsContainer';
import NavigationBar from './containers/NavBarContainer'
import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout'
import { Jumbotron } from './components/Jumbotron';

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <React.Fragment className="App">
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/api/v1/destinations" component={DestinationsContainer} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
};


export default connect(null, { getCurrentUser })(App)
























