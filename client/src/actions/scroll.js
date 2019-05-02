export const SET_MOBILE = Symbol('SET_MOBILE');
export const SET_SKEW = Symbol('SET_SKEW');

export const setMobile = (payload) =>{
  return{
    type: SET_MOBILE,
    payload
  };
};
export const setSkew = (payload) =>{
  return{
    type: SET_SKEW,
    payload
  };
};