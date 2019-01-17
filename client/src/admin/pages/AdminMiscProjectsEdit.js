import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as imagesActions from 'actions/images';
import {pageData} from 'data/pageData';

import MiscProjectsEditForm from 'admin/forms/MiscProjectsEditForm';

class AdminMiscProjectsEdit extends React.Component {

  editImage = values => {
    this.props.imagesActions.editMiscProjectsThenUpdate(values, pageData.adminMiscProjects);
  }

  render(){
    return (
      <div className="admin_container">
        <div className="admin_container__body">
          <MiscProjectsEditForm
            id={this.props.match.params.id}
            onSubmit={this.editImage}
          />
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({

  }),
  dispatch => ({
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(AdminMiscProjectsEdit);
