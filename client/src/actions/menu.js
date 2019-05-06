export const TOGGLE_MENU = Symbol('TOGGLE_MENU');
export const SET_LOADED = Symbol('SET_LOADED');
export const HOVER_MENU_OPTION = Symbol('HOVER_MENU_OPTION');
export const SET_PAGE_NAME = Symbol('SET_PAGE_NAME');

export const toggleMenu = (menuDisplay) => {
  return{
    type: TOGGLE_MENU,
    menuDisplay
  };
};
export const setLoaded = (isLoaded) =>{
  return{
    type: SET_LOADED,
    isLoaded
  };
};
export const setPageName = (currentPage) =>{
  return{
    type: SET_PAGE_NAME,
    currentPage,
  };
};
export const hoverMenuOption = (hoverOption) =>{
  return{
    type: HOVER_MENU_OPTION,
    hoverOption
  };
};