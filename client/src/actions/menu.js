export const TOGGLE_MENU = Symbol('TOGGLE_MENU');
export const SET_LOADED = Symbol('SET_LOADED');
export const HOVER_MENU_OPTION = Symbol('HOVER_MENU_OPTION');
export const SET_PAGE_NAME = Symbol('SET_PAGE_NAME');
export const SET_MENU_SECTION = Symbol('SET_MENU_SECTION');

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
export const setMenuSection = (menuSection) =>{
  return{
    type: SET_MENU_SECTION,
    menuSection
  };
};