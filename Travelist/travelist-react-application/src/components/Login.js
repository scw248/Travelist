import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginFormActions'



const Login = ({loginForm, updateLoginForm}) => {

  const handleChange = event => {
    const { name, value} = event.target
    const updatedFormInfo = {
      ...loginForm,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }
  
  return (
    <form onSubmit={undefined}>
      <input type="text" name="email" onChange={handleChange} value={loginForm.email} placeholder="email"/>
      <input type="text" name="password" onChange={handleChange} value={loginForm.password} placeholder="password"/>
      <input type ="submit" value="Log in"/>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }
}

export default connect(mapStateToProps, { updateLoginForm })(Login)