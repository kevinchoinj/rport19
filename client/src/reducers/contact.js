import {
  SUBMIT_FORM_STARTED,
  SUBMIT_FORM_SUCCEEDED,
  SUBMIT_FORM_FAILURE,
} from 'actions/contact.js';

const DEFAULT_STATE={
  formStatus: 'none',
};

const contactReducer = (state=DEFAULT_STATE, payload) => {
  switch(payload.type){
  case SUBMIT_FORM_STARTED:
    return {
      ...state,
      formStatus: 'sending',
    };
  case SUBMIT_FORM_SUCCEEDED:
    return {
      ...state,
      formStatus: 'success',
    };
  case SUBMIT_FORM_FAILURE:
    return {
      ...state,
      formStatus: 'failure',
    };
  default:
    return state;
  }
};

export default contactReducer;
