import React from 'react';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as pagesActions from 'actions/pages';

class NotFound extends React.Component{
  componentDidMount() {
    this.props.pagesActions.setPage('notfound');
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
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(NotFound);
