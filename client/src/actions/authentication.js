export const REGISTER_PASSPORT_STARTED = Symbol('REGISTER_PASSPORT_STARTED');
export const REGISTER_PASSPORT_SUCCEEDED = Symbol('REGISTER_PASSPORT_SUCCEEDED');
export const REGISTER_PASSPORT_FAILURE = Symbol('REGISTER_PASSPORT_FAILURE');

export const LOGIN_PASSPORT_STARTED = Symbol('LOGIN_PASSPORT_STARTED');
export const LOGIN_PASSPORT_SUCCEEDED = Symbol('LOGIN_PASSPORT_SUCCEEDED');
export const LOGIN_PASSPORT_FAILURE = Symbol('LOGIN_PASSPORT_FAILURE');

export const FIND_PASSPORT_STARTED = Symbol('FIND_PASSPORT_STARTED');
export const FIND_PASSPORT_SUCCEEDED = Symbol('FIND_PASSPORT_SUCCEEDED');
export const FIND_PASSPORT_FAILURE = Symbol('FIND_PASSPORT_FAILURE');

export const LOGOUT_STARTED = Symbol('LOGOUT_STARTED');
export const LOGOUT_SUCCEEDED = Symbol('LOGOUT_SUCCEEDED');
export const LOGOUT_FAILURE = Symbol('LOGOUT_FAILURE');

const registerPassportStarted = request => ({type: REGISTER_PASSPORT_STARTED, request});
const registerPassportSucceeded = data => ({type: REGISTER_PASSPORT_SUCCEEDED, data});
const registerPassportFailure = (data, error) => ({type: REGISTER_PASSPORT_FAILURE, data, error});

const loginPassportStarted = request => ({type: LOGIN_PASSPORT_STARTED, request});
const loginPassportSucceeded = data => ({type: LOGIN_PASSPORT_SUCCEEDED, data});
const loginPassportFailure = (data, error) => ({type: LOGIN_PASSPORT_FAILURE, data, error});

const findPassportStarted = request => ({type: FIND_PASSPORT_STARTED, request});
const findPassportSucceeded = data => ({type: FIND_PASSPORT_SUCCEEDED, data});
const findPassportFailure = (data, error) => ({type: FIND_PASSPORT_FAILURE, data, error});

const logoutStarted = request => ({type: LOGOUT_STARTED, request});
const logoutSucceeded = data => ({type: LOGOUT_SUCCEEDED, data});
const logoutFailure = (data, error) => ({type: LOGOUT_FAILURE, data, error});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const withRequest = ({request}) => request;

function findJWT(username, accessString) {
  return () => {
    return fetch('/findUser', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `JWT ${accessString}`
      },
      params:{
        username: username,
      },
    });
  };
}

export function findPassport(username) {
  const accessString = localStorage.getItem('JWT');
  if (accessString != null) {
    return (dispatch) => {
      dispatch(findPassportStarted());
      return dispatch(findJWT(username, accessString))
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(findPassportSucceeded(json));
        })
        .catch(error => dispatch(findPassportFailure(error)));
    };
  }
  else {
    return (dispatch) => {
      dispatch(findPassportFailure('no token'));
    };
  }
}

function loginJWT(data) {
  return () => {
    return fetch('/loginUser', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data),
    });
  };
};
export function loginPassport(values) {
  return (dispatch) => {
    dispatch(loginPassportStarted());
    return dispatch(loginJWT(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        console.log(json.token);
        localStorage.setItem('JWT', json.token);
        dispatch(loginPassportSucceeded(json));
      })
      .catch(error => dispatch(loginPassportFailure(error)));
  };
}
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

function logoutUser(accessString) {
  return () => {
    return fetch('/logoutUser', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `JWT ${accessString}`
      },
    });
  };
}
export function logout() {
  const accessString = localStorage.getItem('JWT');
  if (accessString != null) {
    return (dispatch) => {
      dispatch(logoutStarted());
      return dispatch(logoutUser(accessString))
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(logoutSucceeded(json));
          localStorage.clear();
        })
        .catch(error => dispatch(logoutFailure(error)));
    };
  }
}