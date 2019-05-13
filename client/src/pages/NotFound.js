import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';


export const NotFound = ({toggleMenu}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleMenu();
  }, [toggleMenu]);

  return(
    <div className="notfound_wrapper">
      <div className="notfound_title">
        404
      </div>
      <div className="notfound_text">
        Sorry, that page does not exist.
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(menuActions.toggleMenu(false)),
  };
};

export default connect (null, mapDispatchToProps)(NotFound);
