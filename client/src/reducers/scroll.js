import {
  CHECK_SCROLL,
} from 'actions/scroll';

const DEFAULT_STATE={
  scrollAmount: 0,
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
  default:
    return state;
  }
};
