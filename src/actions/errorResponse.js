import 'whatwg-fetch';
import store from 'store';
import basicAuth from 'config';

// handle exception here
export function handleResponse(response, currentAction, resData, routeUrl) {
  if (response.ok) {
    return response.json();
  }
  // If invalid jwt token the page will get redirect to login.
  if (response.status === 401) {
    alert('Session expried')
  }
  if (response.status === 400) {
    return response.json();
  }
  // Return error
  const error = new Error(response);
  error.response = response.code;
  throw error;
}
