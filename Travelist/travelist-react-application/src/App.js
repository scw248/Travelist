import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUserActions'
import DestinationsContainer from './containers/DestinationsContainer';
import NavigationBar from './containers/NavBarContainer'
import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <React.Fragment className="App">
        <NavigationBar />
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/api/v1/destinations" component={DestinationsContainer} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
      </React.Fragment>
    );
  }
};


export default connect(null, { getCurrentUser })(App)
























