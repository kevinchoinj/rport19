import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as authActions from 'actions/authentication';
import * as imagesActions from 'actions/images';
import MiscProjectsForm from 'admin/forms/MiscProjectsForm';

class AdminMiscProjects extends React.Component {
  addImage = values => {
    this.props.imagesActions.postImageUrl(values);
  }
  render(){
    return (
      <div>
        <div className="admin_container">
          <div className="admin_title">
            Edit Gallery
          </div>
          <div className="admin_container__body">
            <MiscProjectsForm onSubmit={this.addImage}/>
          </div>
        </div>

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
