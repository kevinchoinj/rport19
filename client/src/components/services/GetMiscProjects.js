import {useEffect} from 'react';
import { connect } from 'react-redux';
import * as imagesActions from 'actions/images';

const GetMiscProjects = ({fetchMiscProjects}) => {
  useEffect(() => {
    fetchMiscProjects();
  }, [fetchMiscProjects]);
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchMiscProjects: () => dispatch(imagesActions.fetchMiscProjects()),
  };
};

export default connect (null, mapDispatchToProps)(GetMiscProjects);