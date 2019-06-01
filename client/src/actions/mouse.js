export const GET_MOUSE_POSITION = Symbol('GET_MOUSE_POSITION');
export const HOVER_IMAGE = Symbol('HOVER_IMAGE');
export const SET_MOBILE = Symbol('SET_MOBILE');

export const getMousePosition = (xValue, yValue) => {
  return{
    type: GET_MOUSE_POSITION,
    xValue: xValue,
    yValue: yValue,
  };
};
export const hoverImage = (image) => {
  return {
    type: HOVER_IMAGE,
    image,
  };
};
export const setMobile = (payload) =>{
  return{
    type: SET_MOBILE,
    payload
  };
};