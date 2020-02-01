import {history} from 'store';
import Cookies from 'js-cookie';

export const FETCH_MISC_PROJECTS_STARTED = Symbol('FETCH_MISC_PROJECTS_STARTED');
export const FETCH_MISC_PROJECTS_SUCCEEDED = Symbol('FETCH_MISC_PROJECTS_SUCCEEDED');
export const FETCH_MISC_PROJECTS_FAILURE = Symbol('FETCH_MISC_PROJECTS_FAILURE');

export const ADD_MISC_PROJECTS_STARTED = Symbol('ADD_MISC_PROJECTS_STARTED');
export const ADD_MISC_PROJECTS_SUCCEEDED = Symbol('ADD_MISC_PROJECTS_SUCCEEDED');
export const ADD_MISC_PROJECTS_FAILURE = Symbol('ADD_MISC_PROJECTS_FAILURE');

export const EDIT_MISC_PROJECTS_STARTED = Symbol('EDIT_MISC_PROJECTS_STARTED');
export const EDIT_MISC_PROJECTS_SUCCEEDED = Symbol('EDIT_MISC_PROJECTS_SUCCEEDED');
export const EDIT_MISC_PROJECTS_FAILURE = Symbol('EDIT_MISC_PROJECTS_FAILURE');

export const REMOVE_IMAGE_STARTED = Symbol('REMOVE_IMAGE_STARTED');
export const REMOVE_IMAGE_SUCCEEDED = Symbol('REMOVE_IMAGE_SUCCEEDED');
export const REMOVE_IMAGE_FAILURE = Symbol('REMOVE_IMAGE_FAILURE');

export const REMOVE_MISC_PROJECTS_STARTED = Symbol('REMOVE_MISC_PROJECTS_STARTED');
export const REMOVE_MISC_PROJECTS_SUCCEEDED = Symbol('REMOVE_MISC_PROJECTS_SUCCEEDED');
export const REMOVE_MISC_PROJECTS_FAILURE = Symbol('REMOVE_MISC_PROJECTS_FAILURE');

export const ADD_IMAGE_STARTED = Symbol('ADD_IMAGE_STARTED');
export const ADD_IMAGE_SUCCEEDED = Symbol('ADD_IMAGE_SUCCEEDED');
export const ADD_IMAGE_FAILURE = Symbol('ADD_IMAGE_FAILURE');

const fetchMiscProjectsStarted = request => ({type: FETCH_MISC_PROJECTS_STARTED, request});
const fetchMiscProjectsSucceeded = data => ({type: FETCH_MISC_PROJECTS_SUCCEEDED, data});
const fetchMiscProjectsFailure = (data, error) => ({type: FETCH_MISC_PROJECTS_FAILURE, data, error});

const addMiscProjectsStarted = request => ({type: ADD_MISC_PROJECTS_STARTED, request});
const addMiscProjectsSucceeded = data => ({type: ADD_MISC_PROJECTS_SUCCEEDED, data});
const addMiscProjectsFailure = (data, error) => ({type: ADD_MISC_PROJECTS_FAILURE, data, error});

const editMiscProjectsStarted = request => ({type: EDIT_MISC_PROJECTS_STARTED, request});
const editMiscProjectsSucceeded = data => ({type: EDIT_MISC_PROJECTS_SUCCEEDED, data});
const editMiscProjectsFailure = (data, error) => ({type: EDIT_MISC_PROJECTS_FAILURE, data, error});

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
=            STORE PHOTOS           =
======================================*/

const getMiscProjects = () => {
  return () => {
    return fetch('/api/v1/project');
  };
}
export const fetchMiscProjects = () => {
  return (dispatch) => {
    dispatch(fetchMiscProjectsStarted());
    return dispatch(getMiscProjects())
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchMiscProjectsSucceeded(json.data));
      })
      .catch(error => dispatch(fetchMiscProjectsFailure(error)));
  };
}

const postMiscProjects = (data) => {
  return () => {
    return fetch('/api/v1/project',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `JWT ${Cookies.get('JWT')}`
        },
        body: JSON.stringify(data)
      });
  };
}
export const addMiscProjects = (values) => {
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

export const addMiscProjectsThenUpdate = (values) => {
  return (dispatch) => {
    dispatch(addMiscProjects(values))
      .then(() => dispatch(fetchMiscProjects()));
  };
}
/*======================================
=             EDIT IMAGE               =
======================================*/
const putMiscProjects = (data) => {
  return () => {
    return fetch('/api/v1/project',
      {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `JWT ${Cookies.get('JWT')}`
        },
        body: JSON.stringify(data)
      });
  };
}
export const editMiscProjects = (values) => {
  return (dispatch) => {
    dispatch(editMiscProjectsStarted());
    return dispatch(putMiscProjects(values))
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(editMiscProjectsSucceeded(json));
      })
      .catch(error => dispatch(editMiscProjectsFailure(error)));
  };
}

export const editMiscProjectsThenUpdate = (values, path) => {
  return (dispatch) => {
    dispatch(editMiscProjects(values))
      .then(() => {
        dispatch(fetchMiscProjects());
        history.push(path);
      });
  };
}
/*======================================
=            REMOVE IMAGE              =
======================================*/

const deleteImage = (awsKey) => {
  return () => {
    return fetch('/api/v1/aws',
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `JWT ${Cookies.get('JWT')}`
        },
        body: JSON.stringify({awsKey: awsKey})
      });
  };
}

export const removeImage = (awsKey) => {
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

const deleteMiscProjects = (id, rev) => {
  return () => {
    return fetch('/api/v1/project',
      {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
          'Authorization': `JWT ${Cookies.get('JWT')}`
        },
        body: JSON.stringify({
          id: id,
          rev: rev,
        })
      });
  };
}
export const removeMiscProjects = (id, rev, awsKey) => {
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
//requires () => dispatch for fetchViewData or data is fetched before content is added
export const removeMiscProjectsThenUpdate = (id, rev, awsKey) => {
  return (dispatch) => {
    dispatch(removeMiscProjects(id, rev, awsKey))
      .then(() => dispatch(fetchMiscProjects()));
  };
}
/*======================================
=             AWS BUCKET               =
======================================*/

const postS3Image = (values) => {
  return () => {
    return fetch('/api/v1/aws',
      {
        method: 'POST',
        headers: {
          'Authorization': `JWT ${Cookies.get('JWT')}`
        },
        body: values,
      });
  };
}

export const addStorePhotoImageAndUrl = (data) => {
let jsonData = {};
data.forEach((value, key) => {jsonData[key] = value});
  return (dispatch) => {
    dispatch(addImageStarted());
    return dispatch(postS3Image(data))
      .then(res => res.json())
      .then((json) => {
        dispatch(addImageSucceeded(json.url));
        const s3Data = Object.assign({
          url: json.url,
          awsKey: json.awsKey
        }, jsonData);
        dispatch(addMiscProjectsThenUpdate(s3Data));
      })
      .catch(error => dispatch(editMiscProjectsFailure(error)));
  };
}

