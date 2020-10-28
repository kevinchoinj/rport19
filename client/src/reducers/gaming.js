import {
  SET_LIGHTBOX_IMAGE,
} from 'actions/gaming';

const DEFAULT_STATE={
  image: '',
};

const gamingReducer = (state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case SET_LIGHTBOX_IMAGE:
    return state = {
      ...state,
      image: payload.image
    };
  default:
    return state;
  }
};

export default gamingReducer;
