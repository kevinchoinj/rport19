export const GET_MOUSE_POSITION = Symbol('GET_MOUSE_POSITION');
export const SET_MOBILE = Symbol('SET_MOBILE');
export const SET_EDGE = Symbol('SET_EDGE');

export const getMousePosition = (xValue, yValue) => {
  return{
    type: GET_MOUSE_POSITION,
    xValue: xValue,
    yValue: yValue,
  };
};

export const setMobile = (payload) =>{
  return{
    type: SET_MOBILE,
    payload
  };
};
export const setEdge = (payload) =>{
  return{
    type: SET_EDGE,
    payload
  };
};