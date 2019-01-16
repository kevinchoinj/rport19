import {
  FETCH_VIEW_SUCCEEDED,
  FETCH_STORE_PHOTOS_SUCCEEDED,
} from 'actions/images';

const DEFAULT_STATE={
  databaseNames: {},
  viewData: {},
  storePhotos: {},
};

export default(state=DEFAULT_STATE, payload)=>
{
  switch(payload.type){
  case FETCH_VIEW_SUCCEEDED:
    /*view-data*/
    return state = {
      ...state,
      viewData: payload.data
    };
  case FETCH_STORE_PHOTOS_SUCCEEDED:
    return state = {
      ...state,
      storePhotos: payload.data
    };
  default:
    return state;
  }
};
