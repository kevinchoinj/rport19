import {
  SET_MOBILE,
  SET_EDGE,
} from 'actions/mouse';

const DEFAULT_STATE={
  isMobile: true,
  isEdge: false,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case SET_MOBILE:
    return state = {
      ...state,
      isMobile: payload.payload
    };
  case SET_EDGE:
    return state = {
      ...state,
      isEdge: payload.payload
    };
  default:
    return state;
  }
};
