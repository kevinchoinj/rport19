export const SET_SKEW = Symbol('SET_SKEW');

export const setSkew = (payload) =>{
  return{
    type: SET_SKEW,
    payload
  };
};