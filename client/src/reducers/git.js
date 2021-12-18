import {
  FETCH_GIT_SUCCEEDED,
} from "actions/git";

const DEFAULT_STATE={
  commits: [],
};

const gitReducer = (state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case FETCH_GIT_SUCCEEDED:
    return state = {
      ...state,
      commits: payload.data
    };
  default:
    return state;
  }
};

export default gitReducer;
