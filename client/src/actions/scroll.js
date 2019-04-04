export const CHECK_SCROLL = Symbol('CHECK_SCROLL');
export const SET_MOBILE = Symbol('SET_MOBILE');
export const SET_SKEW = Symbol('SET_SKEW');

export const checkScroll = (scrollAmount) =>{
  return{
    type: CHECK_SCROLL,
    scrollAmount,
  };
};
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