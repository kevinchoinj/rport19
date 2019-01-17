import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/authentication';
import * as imagesActions from 'actions/images';

import MiscProjectsForm from 'admin/forms/MiscProjectsForm';
import GetMiscProjects from 'components/services/GetMiscProjects';
import MiscProjectsView from 'admin/components/MiscProjectsView';

class AdminMiscProjects extends React.Component {

  addImage = values => {
    this.props.imagesActions.addStorePhotoImageAndUrl(values);
  }

  render(){
    return (
      <div>
        <GetMiscProjects/>
        <div className="admin_container">
          <div className="admin_title">
            Edit Gallery
          </div>
          <div className="admin_container__body">
            <MiscProjectsForm onSubmit={this.addImage}/>
          </div>
        </div>
        <MiscProjectsView/>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({

  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(AdminMiscProjects);
