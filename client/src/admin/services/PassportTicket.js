import {useEffect} from 'react';
import {connect} from 'react-redux';
import * as authActions from 'actions/authentication';

const PassportTicket = ({findPassport}) => {
  useEffect(() => {
    findPassport();
  }, [findPassport]);
  return null;
};

const mapDispatchToProps = (dispatch) => {
  return {
    findPassport: () => dispatch(authActions.findPassport('Shodyra')),
  };
};

export default connect (null, mapDispatchToProps)(PassportTicket);