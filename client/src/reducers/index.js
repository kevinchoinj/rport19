import { reducer as reducerForm } from 'redux-form';
import menu from 'reducers/menu';
import scroll from 'reducers/scroll';
import authentication from 'reducers/authentication';
import images from 'reducers/images';
import transition from 'reducers/transition';
import git from 'reducers/git';

const reducers={
  form: reducerForm,

  menu,
  scroll,

  authentication,
  images,
  transition,
  git,
};

export default reducers;