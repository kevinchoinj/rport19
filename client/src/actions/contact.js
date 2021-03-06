export const SUBMIT_FORM_STARTED = Symbol('SUBMIT_FORM_STARTED');
export const SUBMIT_FORM_SUCCEEDED = Symbol('SUBMIT_FORM_SUCCEEDED');
export const SUBMIT_FORM_FAILURE = Symbol('SUBMIT_FORM_FAILURE');

const submitFormStarted = request => ({type: SUBMIT_FORM_STARTED, request});
const submitFormSucceeded = data => ({type: SUBMIT_FORM_SUCCEEDED, data});
const submitFormFailure = (data, error) => ({type: SUBMIT_FORM_FAILURE, data, error});

function postForm(data, path) {
  return () => {
    return fetch(path,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  };
}

export function submitForm(values, path) {
  return (dispatch) => {
    dispatch(submitFormStarted());
    return dispatch(postForm(values, path))
      .then(res => res.json())
      .then(json => {
        dispatch(submitFormSucceeded(json));
      })
      .catch(error => {
        dispatch(submitFormFailure(error));
      });
  };
}
