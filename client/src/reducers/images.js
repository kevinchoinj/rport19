import {
  FETCH_VIEW_SUCCEEDED,
  FETCH_MISC_PROJECTS_SUCCEEDED,
} from 'actions/images';

const DEFAULT_STATE={
  databaseNames: {},
  viewData: {},
  miscProjects: {},
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case FETCH_VIEW_SUCCEEDED:
    /*view-data*/
    return state = {
      ...state,
      viewData: payload.data
    };
  case FETCH_MISC_PROJECTS_SUCCEEDED:
    return state = {
      ...state,
      miscProjects: payload.data
    };
  default:
    return state;
  }
};
