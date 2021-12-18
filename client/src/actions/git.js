export const FETCH_GIT_STARTED = Symbol("FETCH_GIT_STARTED");
export const FETCH_GIT_SUCCEEDED = Symbol("FETCH_GIT_SUCCEEDED");
export const FETCH_GIT_FAILURE = Symbol("FETCH_GIT_FAILURE");

const fetchGitStarted = request => ({type: FETCH_GIT_STARTED, request});
const fetchGitSucceeded = data => ({type: FETCH_GIT_SUCCEEDED, data});
const fetchGitFailure = (data, error) => ({type: FETCH_GIT_FAILURE, data, error});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

function getGit() {
  return () => {
    return fetch("/api/v1/git/commits");
  };
}
export function fetchGit() {
  return (dispatch) => {
    dispatch(fetchGitStarted());
    return dispatch(getGit())
      .then(handleErrors)
      .then(res => res.json())
      .then(json => {
        dispatch(fetchGitSucceeded(json.data));
      })
      .catch(error => dispatch(fetchGitFailure(error)));
  };
}