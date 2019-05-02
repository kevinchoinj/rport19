import React from 'react';
import { connect } from 'react-redux';
import * as imagesActions from 'actions/images';
import MiscProjectsForm from 'admin/forms/MiscProjectsForm';
import MiscProjectsView from 'admin/components/MiscProjectsView';

const AdminMiscProjects = ({addImage}) => {
  return (
    <React.Fragment>
      <div className="admin_container">
        <div className="admin_title">
          Edit Gallery
        </div>
        <div className="admin_container__body">
          <MiscProjectsForm onSubmit={addImage}/>
        </div>
      </div>
      <MiscProjectsView/>
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addImage: (values) => {
      dispatch(imagesActions.addStorePhotoImageAndUrl(values));
    },
  };
};

export default connect (null, mapDispatchToProps)(AdminMiscProjects);
