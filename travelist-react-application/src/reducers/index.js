import { combineReducers } from 'redux';
import manageDestinations from './manageDestinations'

const rootReducer = combineReducers({
  destinations: manageDestinations
});

export default rootReducer;