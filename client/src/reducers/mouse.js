import {
  SET_MOBILE,
  HOVER_IMAGE,
  GET_MOUSE_POSITION,
} from 'actions/mouse';

const DEFAULT_STATE={
  content: false,
  isMobile: true,
  mousePosition: {xValue: 0, yValue: 0}
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
  default:
    return state;
  }
};
