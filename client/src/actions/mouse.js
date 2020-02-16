export const SET_MOBILE = Symbol('SET_MOBILE');
export const SET_EDGE = Symbol('SET_EDGE');

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