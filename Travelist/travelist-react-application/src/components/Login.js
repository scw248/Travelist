import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginFormActions'
import { login } from '../actions/currentUserActions'

const Login = ({ loginFormData, updateLoginForm, login }) => {

  const handleChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" onChange={handleChange} value={loginFormData.email} placeholder="email" />
      <input type="text" name="password" onChange={handleChange} value={loginFormData.password} placeholder="password" />
      <input type="submit" value="Log in" />
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm, login })(Login)