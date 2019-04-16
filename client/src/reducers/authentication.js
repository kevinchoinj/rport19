import {
  FIND_PASSPORT_SUCCEEDED,
  LOGIN_PASSPORT_SUCCEEDED,
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
      error: null,
    };
  case LOGIN_PASSPORT_SUCCEEDED:
    return {
      ...state,
      loggedIn: true,
      error: null,
    };
  default:
    return state;
  }
};
