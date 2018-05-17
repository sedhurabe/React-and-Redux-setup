import 'whatwg-fetch';

import basicAuth from 'config';
import { SET_CURRENT_USER } from './types';
import { handleResponse } from './errorResponse';

export function createUser(newUser) {
  return {
    type: SET_CURRENT_USER,
    newUser,
  };
}

export function createUserAction(state) {
  const reqObject = {
    firstName: state.firstName,
    lastName: state.lastName
  };

  return dispatch =>
    fetch(`${apiURLPrefix}/athlete`, {
      method: 'post',
      body: JSON.stringify(reqObject),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Basic ${basicAuth.authSecret}`,
      },
    })
      .then(handleResponse)
      .then(res => dispatch(createUser(res)));
}