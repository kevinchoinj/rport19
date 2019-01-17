const upload = require('superagent');

export const FETCH_VIEW_STARTED = Symbol('FETCH_VIEW_STARTED');
export const FETCH_VIEW_SUCCEEDED = Symbol('FETCH_VIEW_SUCCEEDED');
export const FETCH_VIEW_FAILURE = Symbol('FETCH_VIEW_FAILURE');

export const FETCH_MISC_PROJECTS_STARTED = Symbol('FETCH_MISC_PROJECTS_STARTED');
export const FETCH_MISC_PROJECTS_SUCCEEDED = Symbol('FETCH_MISC_PROJECTS_SUCCEEDED');
export const FETCH_MISC_PROJECTS_FAILURE = Symbol('FETCH_MISC_PROJECTS_FAILURE');

export const ADD_MISC_PROJECTS_STARTED = Symbol('ADD_MISC_PROJECTS_STARTED');
export const ADD_MISC_PROJECTS_SUCCEEDED = Symbol('ADD_MISC_PROJECTS_SUCCEEDED');
export const ADD_MISC_PROJECTS_FAILURE = Symbol('ADD_MISC_PROJECTS_FAILURE');

export const REMOVE_IMAGE_STARTED = Symbol('REMOVE_IMAGE_STARTED');
export const REMOVE_IMAGE_SUCCEEDED = Symbol('REMOVE_IMAGE_SUCCEEDED');
export const REMOVE_IMAGE_FAILURE = Symbol('REMOVE_IMAGE_FAILURE');

export const REMOVE_MISC_PROJECTS_STARTED = Symbol('REMOVE_MISC_PROJECTS_STARTED');
export const REMOVE_MISC_PROJECTS_SUCCEEDED = Symbol('REMOVE_MISC_PROJECTS_SUCCEEDED');
export const REMOVE_MISC_PROJECTS_FAILURE = Symbol('REMOVE_MISC_PROJECTS_FAILURE');

export const ADD_IMAGE_STARTED = Symbol('ADD_IMAGE_STARTED');
export const ADD_IMAGE_SUCCEEDED = Symbol('ADD_IMAGE_SUCCEEDED');
export const ADD_IMAGE_FAILURE = Symbol('ADD_IMAGE_FAILURE');


const fetchViewStarted = request => ({type: FETCH_VIEW_STARTED, request});
const fetchViewSucceeded = data => ({type: FETCH_VIEW_SUCCEEDED, data});
const fetchViewFailure = (data, error) => ({type: FETCH_VIEW_FAILURE, data, error});

const fetchMiscProjectsStarted = request => ({type: FETCH_MISC_PROJECTS_STARTED, request});
const fetchMiscProjectsSucceeded = data => ({type: FETCH_MISC_PROJECTS_SUCCEEDED, data});
const fetchMiscProjectsFailure = (data, error) => ({type: FETCH_MISC_PROJECTS_FAILURE, data, error});

const addMiscProjectsStarted = request => ({type: ADD_MISC_PROJECTS_STARTED, request});
const addMiscProjectsSucceeded = data => ({type: ADD_MISC_PROJECTS_SUCCEEDED, data});
const addMiscProjectsFailure = (data, error) => ({type: ADD_MISC_PROJECTS_FAILURE, data, error});

const removeImageStarted = request => ({type: REMOVE_IMAGE_STARTED, request});
const removeImageSucceeded = data => ({type: REMOVE_IMAGE_SUCCEEDED, data});
const removeImageFailure = (data, error) => ({type: REMOVE_IMAGE_FAILURE, data, error});

const removeMiscProjectsStarted = request => ({type: REMOVE_MISC_PROJECTS_STARTED, request});
const removeMiscProjectsSucceeded = data => ({type: REMOVE_MISC_PROJECTS_SUCCEEDED, data});
const removeMiscProjectsFailure = (data, error) => ({type: REMOVE_MISC_PROJECTS_FAILURE, data, error});

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
=            STORE PHOTOS           =
======================================*/

function getMiscProjects() {
  return () => {
    return fetch('/projects/view');
  };
}
export function fetchMiscProjects() {
  return (dispatch) => {
    dispatch(fetchMiscProjectsStarted());
    return dispatch(getMiscProjects())
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMiscProjectsSucceeded(json));
      })
      .catch(error => dispatch(fetchMiscProjectsFailure(error)));
  };
}

function postMiscProjects(data) {
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
export function addMiscProjects(values) {
  return (dispatch) => {
    dispatch(addMiscProjectsStarted());
    return dispatch(postMiscProjects(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(addMiscProjectsSucceeded(json));
      })
      .catch(error => dispatch(addMiscProjectsFailure(error)));
  };
}

export function addMiscProjectsThenUpdate(values) {
  return (dispatch) => {
    dispatch(addMiscProjects(values))
      .then(()=>dispatch(fetchMiscProjects()));
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

function deleteMiscProjects(id, rev) {
  return () => {
    return fetch('/projects/delete',
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
export function removeMiscProjects(id, rev, awsKey) {
  return (dispatch) => {
    dispatch(removeMiscProjectsStarted());
    return dispatch(deleteMiscProjects(id, rev))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(removeMiscProjectsSucceeded(json));
        dispatch(removeImage(awsKey));
      })
      .catch(error => dispatch(removeMiscProjectsFailure(error)));
  };
}
//requires ()=>dispatch for fetchViewData or data is fetched before content is added
export function removeMiscProjectsThenUpdate(id, rev, awsKey) {
  return (dispatch) => {
    dispatch(removeMiscProjects(id, rev, awsKey))
      .then(()=>dispatch(fetchMiscProjects()));
  };
}
/*======================================
=             AWS BUCKET               =
======================================*/

function postS3Image(data) {
  return () => {
    return upload.post('/images/post')
      .attach('awsAction', data.image[0]);
  };
}

export function addStorePhotoImageAndUrl (data) {
  return (dispatch) => {
    dispatch(addImageStarted());
    return dispatch(postS3Image(data))
      .end((err, res) => {
        if (res) {
          dispatch(addImageSucceeded(res.body.url));
          const s3Data = Object.assign({
            url: res.body.url,
            awsKey: res.body.awsKey
          }, data);
          dispatch(addMiscProjectsThenUpdate(s3Data));
        }
        else if (err) {
          dispatch(addImageFailure(err));
        }
      });
  };
}

