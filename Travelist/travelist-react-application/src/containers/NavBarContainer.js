import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap'
import Logout from '../components/Logout'
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
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/api/v1/destinations">Home</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to={`/api/v1/users/${currentUser.id}/destinations`}>My Destinations</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/api/v1/logout">Logout</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar> :
        <Navbar expand="lg">
          <Navbar.Brand></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Item>
                <Nav.Link>
                  <Link to="/api/v1/signup">Signup</Link>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link>
                  <Link to="/api/v1/login">Login</Link>
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      }
    </Styles>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavigationBar)