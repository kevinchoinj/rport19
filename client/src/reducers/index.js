import { reducer as reducerForm } from 'redux-form';
import menu from 'reducers/menu';
import authentication from 'reducers/authentication';
import images from 'reducers/images';
import transition from 'reducers/transition';
import git from 'reducers/git';
import mouse from 'reducers/mouse';
import gaming from 'reducers/gaming';

const reducers={
  form: reducerForm,

  menu,

  gaming,
  authentication,
  images,
  transition,
  mouse,
  git,
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
=                TRANSITION                 =
======================================*/
export const selectLoadedContent = (state) => state.transition.loadedContent;

/*======================================
=                IMAGES                 =
======================================*/
export const selectImagesProjects = (state) => state.images.miscProjects;

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
export const selectMouseContent = (state) => state.mouse.content ? state.mouse.content : '';
export const selectIsMobile = (state) => state.mouse.isMobile;
export const selectIsEdge = (state) => state.mouse.isEdge;

/*======================================
=                GAMING                 =
======================================*/
export const selectGamingImage = (state) => state.gaming.image;
