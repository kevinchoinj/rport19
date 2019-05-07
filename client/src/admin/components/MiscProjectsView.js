import React from 'react';
import {connect} from 'react-redux';
import * as imagesActions from 'actions/images';
import {Link} from 'react-router-dom';
import {pageData} from 'data/pageData';
import {
  selectImagesProjects,
} from 'reducers';

const MiscProjectsView = ({miscProjects, removeProject}) => {
  return (
    <div className="admin_login_container">
      {miscProjects && miscProjects.map((value, key) => {
        return (
          <div className="misc_image__container" key={key}>
            <div className="misc_title">
              {value.value.name}
              <br/>
              {value.value.link}
            </div>

            <Link to={`${pageData.adminMiscProjects}/${value.id}`}>
              <img src={value.value.url} alt={value.value.name} className="misc_image"/>
            </Link>
            <div
              className="admin_delete"
              onClick={() => removeProject(value.id, value.doc._rev, value.value.awsKey)}
            >
              delete
            </div>
          </div>
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    miscProjects: selectImagesProjects(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProject: (id, rev, awsKey) => {
      dispatch(imagesActions.removeMiscProjectsThenUpdate(id, rev, awsKey));
    }
  };
};

export default connect (mapStateToProps, mapDispatchToProps)(MiscProjectsView);