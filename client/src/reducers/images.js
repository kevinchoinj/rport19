import {
  FETCH_MISC_PROJECTS_SUCCEEDED,
} from 'actions/images';

const DEFAULT_STATE={
  miscProjects: {},
};

export default(state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case FETCH_MISC_PROJECTS_SUCCEEDED:
    return state = {
      ...state,
      miscProjects: payload.data
    };
  default:
    return state;
  }
};
