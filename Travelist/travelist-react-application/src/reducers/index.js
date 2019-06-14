import { combineReducers } from 'redux';
import destinationsReducer from './destinationsReducer'
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  users: usersReducer,
  destinations: destinationsReducer
});

export default rootReducer;