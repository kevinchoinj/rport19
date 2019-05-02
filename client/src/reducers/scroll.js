import {
  SET_MOBILE,
  SET_SKEW,
} from 'actions/scroll';

const DEFAULT_STATE={
  isMobile: true,
  skew: ''
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
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
