import {useEffect} from 'react';
import {connect} from 'react-redux';
import * as authActions from 'actions/authentication';

const PassportTicket = props => {
  useEffect(() => {
    props.findPassport();
  }, []);
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    findPassport: () => dispatch(authActions.findPassport('Shodyra')),
  };
};

export default connect (null, mapDispatchToProps)(PassportTicket);