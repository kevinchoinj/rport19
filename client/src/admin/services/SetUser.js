import {useEffect} from 'react';
import {connect} from 'react-redux';
import {getCurrentUser} from 'actions/authentication';

const SetUser = ({getUser}) => {
  useEffect(() => {
    getUser();
  }, [getUser]);
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: () => dispatch(getCurrentUser()),
  };
};

export default connect (null, mapDispatchToProps)(SetUser);