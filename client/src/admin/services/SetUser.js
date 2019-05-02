import {useEffect} from 'react';
import {connect} from 'react-redux';
import * as authActions from 'actions/authentication';

const SetUser = props => {
  useEffect(() => {
    props.getCurrentUser();
  }, []);
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCurrentUser: () => dispatch(authActions.getCurrentUser()),
  };
};

export default connect (null, mapDispatchToProps)(SetUser);