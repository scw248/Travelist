import { createStore, applyMiddleware, compose, combineReducers } from 'redux'
import usersReducer from './reducers/usersReducer.js'
import currentUserReducer from './reducers/currentUserReducer'
// import destinationsReducer from './destinationsReducer'
import thunk from 'redux-thunk'

const reducer = combineReducers({
  users: usersReducer,
  currentUser: currentUserReducer,
  // destinations: destinationsReducer,
})

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)))

export default store
