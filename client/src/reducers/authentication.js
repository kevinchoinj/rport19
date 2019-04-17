import {
  FIND_PASSPORT_SUCCEEDED,
  LOGIN_PASSPORT_SUCCEEDED,
  LOGOUT_SUCCEEDED,
} from 'actions/authentication';

const DEFAULT_STATE={
  loggedIn: false,
};

export default(state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case FIND_PASSPORT_SUCCEEDED:
    return {
      ...state,
      loggedIn: true,
    };
  case LOGIN_PASSPORT_SUCCEEDED:
    return {
      ...state,
      loggedIn: true,
    };
  case LOGOUT_SUCCEEDED:
    return {
      ...state,
      loggedIn: false,
    };
  default:
    return state;
  }
};
