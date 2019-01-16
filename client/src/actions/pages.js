export const SET_PAGE = Symbol('SET_PAGE');
export const SET_PREVIOUS_PAGE = Symbol('SET_PREVIOUS_PAGE');

export const setPage = (currentPage) => {
  return{
    type: SET_PAGE,
    currentPage,
  };
};
export const setPreviousPage = (pageName) => {
  return{
    type: SET_PREVIOUS_PAGE,
    pageName,
  };
};
