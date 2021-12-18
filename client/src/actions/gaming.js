export const SET_LIGHTBOX_IMAGE = Symbol("SET_LIGHTBOX_IMAGE");

export const setLightboxImage = (image) => {
  return{
    type: SET_LIGHTBOX_IMAGE,
    image
  };
};