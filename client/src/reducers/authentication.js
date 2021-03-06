import {
  FIND_PASSPORT_SUCCEEDED,
  LOGIN_PASSPORT_SUCCEEDED,
  LOG_OUT,
} from 'actions/authentication';

const DEFAULT_STATE={
  loggedIn: false,
};

const authenticationReducer = (state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case FIND_PASSPORT_SUCCEEDED:
    return {
      ...state,
      loggedIn: payload.data.username === 'shodyra' ? true : false,
    };
  case LOGIN_PASSPORT_SUCCEEDED:
    return {
      ...state,
      loggedIn: payload.data.username === 'shodyra' ? true : false,
    };
  case LOG_OUT:
    return {
      ...state,
      loggedIn: false,
    };
  default:
    return state;
  }
};

export default authenticationReducer;
