const upload = require('superagent');

export const FETCH_VIEW_STARTED = Symbol('FETCH_VIEW_STARTED');
export const FETCH_VIEW_SUCCEEDED = Symbol('FETCH_VIEW_SUCCEEDED');
export const FETCH_VIEW_FAILURE = Symbol('FETCH_VIEW_FAILURE');

export const ADD_IMAGE_URL_STARTED = Symbol('ADD_IMAGE_URL_STARTED');
export const ADD_IMAGE_URL_SUCCEEDED = Symbol('ADD_IMAGE_URL_SUCCEEDED');
export const ADD_IMAGE_URL_FAILURE = Symbol('ADD_IMAGE_URL_FAILURE');

export const FETCH_STORE_PHOTOS_STARTED = Symbol('FETCH_STORE_PHOTOS_STARTED');
export const FETCH_STORE_PHOTOS_SUCCEEDED = Symbol('FETCH_STORE_PHOTOS_SUCCEEDED');
export const FETCH_STORE_PHOTOS_FAILURE = Symbol('FETCH_STORE_PHOTOS_FAILURE');

export const ADD_STORE_PHOTOS_STARTED = Symbol('ADD_STORE_PHOTOS_STARTED');
export const ADD_STORE_PHOTOS_SUCCEEDED = Symbol('ADD_STORE_PHOTOS_SUCCEEDED');
export const ADD_STORE_PHOTOS_FAILURE = Symbol('ADD_STORE_PHOTOS_FAILURE');

export const REMOVE_IMAGE_STARTED = Symbol('REMOVE_IMAGE_STARTED');
export const REMOVE_IMAGE_SUCCEEDED = Symbol('REMOVE_IMAGE_SUCCEEDED');
export const REMOVE_IMAGE_FAILURE = Symbol('REMOVE_IMAGE_FAILURE');

export const REMOVE_STORE_PHOTOS_STARTED = Symbol('REMOVE_STORE_PHOTOS_STARTED');
export const REMOVE_STORE_PHOTOS_SUCCEEDED = Symbol('REMOVE_STORE_PHOTOS_SUCCEEDED');
export const REMOVE_STORE_PHOTOS_FAILURE = Symbol('REMOVE_STORE_PHOTOS_FAILURE');

export const ADD_IMAGE_STARTED = Symbol('ADD_IMAGE_STARTED');
export const ADD_IMAGE_SUCCEEDED = Symbol('ADD_IMAGE_SUCCEEDED');
export const ADD_IMAGE_FAILURE = Symbol('ADD_IMAGE_FAILURE');


const fetchViewStarted = request => ({type: FETCH_VIEW_STARTED, request});
const fetchViewSucceeded = data => ({type: FETCH_VIEW_SUCCEEDED, data});
const fetchViewFailure = (data, error) => ({type: FETCH_VIEW_FAILURE, data, error});

const addImageUrlStarted = request => ({type: ADD_IMAGE_URL_STARTED, request});
const addImageUrlSucceeded = data => ({type: ADD_IMAGE_URL_SUCCEEDED, data});
const addImageUrlFailure = (data, error) => ({type: ADD_IMAGE_URL_FAILURE, data, error});

const fetchStorePhotosStarted = request => ({type: FETCH_STORE_PHOTOS_STARTED, request});
const fetchStorePhotosSucceeded = data => ({type: FETCH_STORE_PHOTOS_SUCCEEDED, data});
const fetchStorePhotosFailure = (data, error) => ({type: FETCH_STORE_PHOTOS_FAILURE, data, error});

const addStorePhotosStarted = request => ({type: ADD_STORE_PHOTOS_STARTED, request});
const addStorePhotosSucceeded = data => ({type: ADD_STORE_PHOTOS_SUCCEEDED, data});
const addStorePhotosFailure = (data, error) => ({type: ADD_STORE_PHOTOS_FAILURE, data, error});

const removeImageStarted = request => ({type: REMOVE_IMAGE_STARTED, request});
const removeImageSucceeded = data => ({type: REMOVE_IMAGE_SUCCEEDED, data});
const removeImageFailure = (data, error) => ({type: REMOVE_IMAGE_FAILURE, data, error});

const removeStorePhotosStarted = request => ({type: REMOVE_STORE_PHOTOS_STARTED, request});
const removeStorePhotosSucceeded = data => ({type: REMOVE_STORE_PHOTOS_SUCCEEDED, data});
const removeStorePhotosFailure = (data, error) => ({type: REMOVE_STORE_PHOTOS_FAILURE, data, error});

const addImageStarted = request => ({type: ADD_IMAGE_STARTED, request});
const addImageSucceeded = data => ({type: ADD_IMAGE_SUCCEEDED, data});
const addImageFailure = (data, error) => ({type: ADD_IMAGE_FAILURE, data, error});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

/*======================================
=             SINGLE VIEW              =
======================================*/
function getViewData() {
  return () => {
    return fetch('/data/view');
  };
}
export function fetchViewData() {
  return (dispatch) => {
    dispatch(fetchViewStarted());
    return dispatch(getViewData())
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchViewSucceeded(json));
      })
      .catch(error => dispatch(fetchViewFailure(error)));
  };
}

/*======================================
=           POST IMAGE URL           =
======================================*/
function postImageUrl(data) {
  return () => {
    return fetch('/images/url',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  };
}
export function addImageUrl(values) {
  return (dispatch) => {
    dispatch(addImageUrlStarted());
    return dispatch(postImageUrl(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(addImageUrlSucceeded(json));
      })
      .catch(error => dispatch(addImageUrlFailure(error)));
  };
}

export function addImageUrlThenUpdate(values) {
  return (dispatch) => {
    dispatch(addImageUrl(values))
      .then(()=>dispatch(fetchViewData()));
  };
}
//requires ()=>dispatch for fetchViewData or data is fetched before content is added

/*======================================
=            STORE PHOTOS           =
======================================*/

function getStorePhotos() {
  return () => {
    return fetch('/projects/view');
  };
}
export function fetchStorePhotos() {
  return (dispatch) => {
    dispatch(fetchStorePhotosStarted());
    return dispatch(getStorePhotos())
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchStorePhotosSucceeded(json));
      })
      .catch(error => dispatch(fetchStorePhotosFailure(error)));
  };
}

function postStorePhotos(data) {
  return () => {
    return fetch('/projects/post',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  };
}
export function addStorePhotos(values) {
  return (dispatch) => {
    dispatch(addStorePhotosStarted());
    return dispatch(postStorePhotos(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(addStorePhotosSucceeded(json));
      })
      .catch(error => dispatch(addStorePhotosFailure(error)));
  };
}

export function addStorePhotosThenUpdate(values) {
  return (dispatch) => {
    dispatch(addStorePhotos(values))
      .then(()=>dispatch(fetchStorePhotos()));
  };
}

/*======================================
=            REMOVE IMAGE              =
======================================*/

function deleteImage(awsKey) {
  return () => {
    return fetch('/images/delete',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({awsKey: awsKey})
      });
  };
}

export function removeImage (awsKey) {
  return (dispatch) => {
    dispatch(removeImageStarted());
    return dispatch(deleteImage(awsKey))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(removeImageSucceeded(json));
      })
      .catch(error => dispatch(removeImageFailure(error)));
  };
}

function deleteStorePhotos(id, rev) {
  return () => {
    return fetch('/projects/delete/',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({
          id: id,
          rev: rev,
        })
      });
  };
}
export function removeStorePhotos(id, rev, awsKey) {
  return (dispatch) => {
    dispatch(removeStorePhotosStarted());
    return dispatch(deleteStorePhotos(id, rev))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(removeStorePhotosSucceeded(json));
        dispatch(removeImage(awsKey));
      })
      .catch(error => dispatch(removeStorePhotosFailure(error)));
  };
}
//requires ()=>dispatch for fetchViewData or data is fetched before content is added
export function removeStorePhotosThenUpdate(id, rev, awsKey) {
  return (dispatch) => {
    dispatch(removeStorePhotos(id, rev, awsKey))
      .then(()=>dispatch(fetchStorePhotos()));
  };
}
/*======================================
=             AWS BUCKET               =
======================================*/

function postStorePhotoImage(data) {
  return () => {
    return upload.post('/images/post')
      .attach('awsAction', data.image[0]);
  };
}

export function addStorePhotoImageAndUrl (data) {
  return (dispatch) => {
    dispatch(addImageStarted());
    return dispatch(postStorePhotoImage(data))
      .end((err, res) => {
        if (res) {
          dispatch(addImageSucceeded(res.body.url));
          const storeData = Object.assign({url: res.body.url, awsKey: res.body.awsKey}, data);
          dispatch(addStorePhotosThenUpdate(storeData));
        }
        else if (err) {
          dispatch(addImageFailure(err));
        }
      });
  };
}

