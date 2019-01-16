import {
  CHECK_SCROLL,
  CHECK_RESIZE,
} from 'actions/scroll';

const DEFAULT_STATE={
  scrollAmount: 0,
  resizing: false,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case CHECK_SCROLL:
    state = {
      ...state,
      scrollAmount: payload.scrollAmount
    };
    return state;
  case CHECK_RESIZE:
    state = {
      ...state,
      resizing: payload.resizing
    };
    return state;
  default:
    return state;
  }
};
