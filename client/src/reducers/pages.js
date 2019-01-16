import {
  SET_PAGE,
  SET_PREVIOUS_PAGE,
} from 'actions/pages';

const DEFAULT_STATE={
  currentPage: '',
  previousPage: '',
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case SET_PAGE:
    return state = {
      ...state,
      currentPage: payload.currentPage
    };
  case SET_PREVIOUS_PAGE:
    return {
      ...state,
      previousPage: payload.pageName,
    };
  default:
    return state;
  }
};
