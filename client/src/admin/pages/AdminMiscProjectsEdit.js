import React from 'react';
import { connect } from 'react-redux';
import * as imagesActions from 'actions/images';
import MiscProjectsEditForm from 'admin/forms/MiscProjectsEditForm';

const AdminMiscProjects = ({match, editImage}) => {
  return (
    <div className="admin_container">
      <div className="admin_container__body">
        <MiscProjectsEditForm
          id={match.params.id}
          onSubmit={editImage}
        />
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    editImage: (values) => {
      dispatch(imagesActions.editMiscProjectsThenUpdate(values, '/shodyra/admin/misc'));
    },
  };
};

export default connect (null, mapDispatchToProps)(AdminMiscProjects);

