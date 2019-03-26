import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as pagesActions from 'actions/pages';
import * as menuActions from 'actions/menu';

class NotFound extends React.Component{
  componentDidMount() {
    this.props.pagesActions.setPage('notfound');
    this.props.menuActions.toggleMenu(false);
  }
  render(){
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
  }
}


export default connect(
  () => ({
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(NotFound);
