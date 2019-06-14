import React from 'react'
import { connect } from 'react-redux'

const Login = () => {
  return (
    <form onSubmit={undefined}>
      <input type="text" name="email" onChange={undefined} value={undefined} placeholder="email"/>
      <input type="text" name="password" onChange={undefined} value={undefined} placeholder="password"/>
      <input type ="submit" value="Log in"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    email: state.login.email,
    password: state.login.password 
  }
}

export default connect()(Login)