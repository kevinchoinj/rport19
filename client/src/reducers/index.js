import menu from 'reducers/menu';
import authentication from 'reducers/authentication';
import images from 'reducers/images';
import git from 'reducers/git';
import mouse from 'reducers/mouse';
import gaming from 'reducers/gaming';
import contact from 'reducers/contact';
import {createSelector} from 'reselect';

import {find, propEq} from 'ramda';

const reducers={
  menu,
  gaming,
  authentication,
  images,
  mouse,
  git,
  contact,
};

export default reducers;

/*======================================
=                MENU                 =
======================================*/
export const selectMenuDisplay = (state) => state.menu.menuDisplay;
export const selectMenuHover = (state) => state.menu.hoverOption;

/*======================================
=               SCROLL                 =
======================================*/
export const selectScrollSkew = (state) => state.scroll.skew;

/*======================================
=                IMAGES                 =
========================-==============*/
export const selectImagesProjects = (state) => state.images.miscProjects;

export const selectImagesProjectsById = (state, id) => createSelector(
  selectImagesProjects,
  (miscProjects) =>  find(propEq('id', id), miscProjects)
)(state);

/*======================================
=                AUTH                 =
======================================*/
export const selectAuthLoggedIn = (state) => state.authentication.loggedIn;

/*======================================
=                GIT                 =
======================================*/
export const selectGitCommits = (state) => state.git.commits;

/*======================================
=               MOUSE                  =
======================================*/
export const selectCurrentMousePosition = (state) => state.mouse.mousePosition;
export const selectMouseContent = (state) => state.mouse.content ? state.mouse.content : '';
export const selectIsMobile = (state) => state.mouse.isMobile;
export const selectIsEdge = (state) => state.mouse.isEdge;

/*======================================
=                GAMING                 =
======================================*/
export const selectGamingImage = (state) => state.gaming.image;

/*======================================
=                CONTACT                 =
======================================*/
export const selectFormStatus = (state) => state.contact.formStatus;
