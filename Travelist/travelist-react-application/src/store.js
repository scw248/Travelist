import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/usersReducer.js'
import currentUserReducer from './reducers/currentUserReducer'
import loginFormReducer from './reducers/loginFormReducer'
import thunk from 'redux-thunk'
import destinationsReducer from './reducers/destinationsReducer.js';
// import destinationsReducer from './destinationsReducer'

const reducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer,
  loginForm: loginFormReducer,
  destinations: destinationsReducer

  // destinations: destinationsReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
