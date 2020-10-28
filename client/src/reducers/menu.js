import {
  TOGGLE_MENU,
  HOVER_MENU_OPTION,
} from 'actions/menu';

const DEFAULT_STATE={
  menuDisplay: null,
  hoverOption: null,
};

const menuReducer = (state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case TOGGLE_MENU:
    return state = {
      ...state,
      menuDisplay:payload.menuDisplay
    };
  case HOVER_MENU_OPTION:
    return state = {
      ...state,
      hoverOption:payload.hoverOption
    };
  default:
    return state;
  }
};

export default menuReducer;
