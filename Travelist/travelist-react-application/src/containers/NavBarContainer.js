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
      <Navbar expand="lg">
        <Navbar.Brand href="/api/v1">{currentUser ? <p>Welcome {currentUser.attributes.email}</p> : ""}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classname="ml-auto">
            <Nav.Item>
              <Nav.Link>
                <Link to="/api/v1/destinations">Home</Link>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link>
                <Link to="/api/v1">{currentUser ? <Logout /> : <Login />}</Link>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavigationBar)