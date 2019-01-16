export const CHECK_SCROLL = Symbol('CHECK_SCROLL');
export const CHECK_RESIZE = Symbol('CHECK_RESIZE');

export const checkScroll = (scrollAmount) =>{
  return{
    type: CHECK_SCROLL,
    scrollAmount,
  };
};
export const checkResize = (resizing) =>{
  return{
    type: CHECK_RESIZE,
    resizing,
  };
};
