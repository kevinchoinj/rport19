import {
  SET_MOBILE,
  HOVER_IMAGE,
  GET_MOUSE_POSITION,
  SET_EDGE,
} from 'actions/mouse';

const DEFAULT_STATE={
  content: false,
  isMobile: true,
  mousePosition: {xValue: 0, yValue: 0},
  isEdge: false,
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case GET_MOUSE_POSITION:
    return state = {
      ...state,
      mousePosition: {
        xValue: payload.xValue,
        yValue: payload.yValue,
      },
    };
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
