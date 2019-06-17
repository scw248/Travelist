import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import Logout from '../components/Logout'
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components'

const Styles = styled.div`
  .navbar {
    background-color: #222
  }

  .navbar-brand, .navbar-nav .nav-link{
    color: #bbb

  &:hover {
    color: white
  }
  }
`

const NavigationBar = ({ currentUser }) => {

  return (
    <Styles>
      <Navbar expand="lg">
        <Navbar.Brand href="/api/v1">SOMETHING</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav classname="ml-auto">
            <Nav.Item>{currentUser ? <Logout /> : <Login />}</Nav.Item>
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