export const TOGGLE_MENU = Symbol("TOGGLE_MENU");
export const SET_LOADED = Symbol("SET_LOADED");
export const HOVER_MENU_OPTION = Symbol("HOVER_MENU_OPTION");

export const toggleMenu = (menuDisplay) => {
  return{
    type: TOGGLE_MENU,
    menuDisplay
  };
};
export const hoverMenuOption = (hoverOption) =>{
  return{
    type: HOVER_MENU_OPTION,
    hoverOption
  };
};