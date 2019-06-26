import {
  SET_MOBILE,
  HOVER_IMAGE,
  SET_EDGE,
} from 'actions/mouse';

const DEFAULT_STATE={
  content: '',
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
  case HOVER_IMAGE:
    return state = {
      ...state,
      content: payload.image,
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
