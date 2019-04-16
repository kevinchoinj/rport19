import fire from 'fire';
import {history} from 'store';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const AUTH_ERROR = 'AUTH_ERROR';
export const AUTH_USER = 'AUTH_USER';

export const REGISTER_PASSPORT_STARTED = Symbol('REGISTER_PASSPORT_STARTED');
export const REGISTER_PASSPORT_SUCCEEDED = Symbol('REGISTER_PASSPORT_SUCCEEDED');
export const REGISTER_PASSPORT_FAILURE = Symbol('REGISTER_PASSPORT_FAILURE');

const registerPassportStarted = request => ({type: REGISTER_PASSPORT_STARTED, request});
const registerPassportSucceeded = data => ({type: REGISTER_PASSPORT_SUCCEEDED, data});
const registerPassportFailure = (data, error) => ({type: REGISTER_PASSPORT_FAILURE, data, error});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const withRequest = ({request}) => request;

export function loginJWT(data) {
  return () => {
    let accessString = localStorage.getItem('JWT');
    if (accessString === null) {

    }
    return fetch('/findUser', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        Authorization: `JWT ${accessString}`
      },
    });
  };
};

function registerJWT(data) {
  return () => {
    return fetch('/registerUser',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  };
}
export function registerPassport(values) {
  return (dispatch) => {
    dispatch(registerPassportStarted());
    return dispatch(registerJWT(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(registerPassportSucceeded(json));
      })
      .catch(error => dispatch(registerPassportFailure(error)));
  };
}

export function getCurrentUser() {
  return function (dispatch) {
    fire.auth().onAuthStateChanged(user => {
      if (user) {
        dispatch(authUser(user));
      } else {
        dispatch(signOutUser());
      }
    });
  };
};

export function signUpUser(data) {
  return function(dispatch) {
    return fire.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(response => {
        dispatch(authUser());
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}
export const signUpUserThenRedirect = (data, path) => (dispatch, getState) =>
  dispatch(signUpUser(data))
    .then(() => history.push(path));


export function signInUser(data) {
  return function(dispatch) {
    return fire.auth().signInWithEmailAndPassword(data.email, data.password)
      .then(response => {
        dispatch(authUser(response));
      })
      .catch(error => {
        dispatch(authError(error));
      });
  };
}
export const signInUserThenRedirect = (data, path) => (dispatch, getState) =>
  dispatch(signInUser(data))
    .then(() => history.push(path));

export function signOutUser() {
  return function (dispatch) {
    fire.auth().signOut()
      .then(() =>{
        dispatch({
          type: SIGN_OUT_USER
        });
      });
  };
}

export function authUser(response) {
  return {
    type: AUTH_USER,
    payload: response,
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}