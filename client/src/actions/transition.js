export const LOAD_CONTENT = Symbol('LOAD_CONTENT');

export const loadContent = (location) => {
  return{
    type: LOAD_CONTENT,
    location,
  };
};
