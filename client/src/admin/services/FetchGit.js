import {useEffect} from 'react';
import { connect } from 'react-redux';
import * as gitActions from 'actions/git';

const FetchGit = props => {
  useEffect(() => {
    props.fetchGit();
  }, []);
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchGit: () => dispatch(gitActions.fetchGit()),
  };
};

export default connect (null, mapDispatchToProps)(FetchGit);