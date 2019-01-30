export const CHECK_SCROLL = Symbol('CHECK_SCROLL');

export const checkScroll = (scrollAmount) =>{
  return{
    type: CHECK_SCROLL,
    scrollAmount,
  };
};