import {
  LOAD_CONTENT,
} from 'actions/transition';

const DEFAULT_STATE={
  loadedContent: [],
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case LOAD_CONTENT:
    return {
      ...state,
      loadedContent: payload.location,
    };

  default:
    return state;
  }
};
