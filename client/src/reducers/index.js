import { reducer as reducerForm } from 'redux-form';
import menu from 'reducers/menu';
import scroll from 'reducers/scroll';
import pages from 'reducers/pages';
import authentication from 'reducers/authentication';
import images from 'reducers/images';


const reducers={
  form: reducerForm,

  menu,
  scroll,
  pages,

  authentication,
  images,
};

export default reducers;