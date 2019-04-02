export const CHECK_SCROLL = Symbol('CHECK_SCROLL');
export const SET_MOBILE = Symbol('SET_MOBILE');

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