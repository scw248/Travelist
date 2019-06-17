import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import Logout from '../components/Logout'
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color: #222;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;

    &:hover {
      color: white;
    }
  }
`

const NavigationBar = ({ currentUser }) => {

  return (
    <Styles>
      {currentUser ?
        <Navbar expand="lg">
          <Navbar.Brand>Welcome {currentUser.attributes.email}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav classname="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/api/v1/destinations">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {<Logout />}
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        : <Login />}
    </Styles>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavigationBar)