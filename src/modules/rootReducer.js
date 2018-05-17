// Empty placeholder to reserve reducer namespace.
// Otherwise redux may complain when we asyncrhonously
// inject reducers.

/**
 * Routing to be implemented
 */
import { combineReducers } from 'redux';
import loginAction from '../reducers/login';

const allReducers = {
  loginAction,
};

const appReducer = combineReducers(allReducers);

export default appReducer;
