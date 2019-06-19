import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUserActions'
import DestinationsContainer from './containers/DestinationsContainer';
import MyDestinationsContainer from './containers/MyDestinationsContainer'
import NavigationBar from './containers/NavBarContainer'
import { NoMatch } from './components/NoMatch'
import { Layout } from './components/Layout'
import { Jumbotron } from './components/Jumbotron';
import Login from './components/Login'
import Signup from './components/Signup'
import Logout from './components/Logout'

class App extends Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }

  render() {
    return (
      <React.Fragment>
        <Router>
          <NavigationBar />
          <Jumbotron />
          <Layout>
            <Switch>
              <Route exact path="/api/v1/destinations" component={DestinationsContainer} />
              <Route path={`/api/v1/users/:currentUserId/destinations`} component={MyDestinationsContainer} />
              <Route exact path='/api/v1/signup' component={Signup} />
              <Route exact path='/api/v1/login' component={Login} />
              <Route exact path='/api/v1/logout' component={Logout} />
              <Route component={NoMatch} />
            </Switch>
          </Layout>
        </Router>
      </React.Fragment>
    );
  }
};

export default connect(null, { getCurrentUser })(App)
























