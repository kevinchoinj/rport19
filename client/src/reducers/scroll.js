import {
  CHECK_SCROLL,
  SET_MOBILE,
  SET_SKEW,
} from 'actions/scroll';

const DEFAULT_STATE={
  scrollAmount: 0,
  isMobile: true,
  skew: ''
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
  case SET_MOBILE:
    return state = {
      ...state,
      isMobile: payload.payload
    };
  case SET_SKEW:
    return state = {
      ...state,
      skew: payload.payload
    };
  default:
    return state;
  }
};
