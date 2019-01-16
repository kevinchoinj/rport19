import {
  TOGGLE_MENU,
  SET_LOADED,
  HOVER_MENU_OPTION,
  SET_PAGE_NAME,
  SET_MENU_SECTION,
} from 'actions/menu';

const DEFAULT_STATE={
  menuDisplay: null,
  isLoaded: false,
  hoverOption: null,
  currentPage: '',
  menuSection: 'projects',
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case TOGGLE_MENU:
    return state = {
      ...state,
      menuDisplay:payload.menuDisplay
    };
  case SET_LOADED:
    return state = {
      ...state,
      isLoaded:payload.isLoaded
    };
  case SET_PAGE_NAME:
    return state = {
      ...state,
      currentPage: payload.currentPage
    };
  case HOVER_MENU_OPTION:
    return state = {
      ...state,
      hoverOption:payload.hoverOption
    };
  case SET_MENU_SECTION:
    return state = {
      ...state,
      menuSection:payload.menuSection
    };
  default:
    return state;
  }
};
