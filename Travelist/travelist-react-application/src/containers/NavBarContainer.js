import React from 'react'
import { connect } from 'react-redux'
import Login from '../components/Login'
import Logout from '../components/Logout'

const NavBar = ({ currentUser }) => {

  return (
    <div className="NavBar">
      {currentUser ? <p>Welcome {currentUser.attributes.email}</p> : ""}
      {currentUser ? <Logout /> : <Login />}
    </div>
  )
}

const mapStateToProps = ({ currentUser }) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar)