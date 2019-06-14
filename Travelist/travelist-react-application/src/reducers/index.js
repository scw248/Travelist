import { combineReducers } from 'redux';
import destinationsReducer from './destinationsReducer'
import usersReducer from './usersReducer';
import currentUser from './currentUser'

const rootReducer = combineReducers({
  users: usersReducer,
  destinations: destinationsReducer,
  currentUser
});

export default rootReducer;