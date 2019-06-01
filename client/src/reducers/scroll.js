import {
  SET_SKEW,
} from 'actions/scroll';

const DEFAULT_STATE={
  skew: ''
};

export default(state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case SET_SKEW:
    return state = {
      ...state,
      skew: payload.payload
    };
  default:
    return state;
  }
};
