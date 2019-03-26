import React from 'react';
import { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as imagesActions from 'actions/images';
import {Link} from 'react-router-dom';
import {pageData} from 'data/pageData';

class DatabaseList extends Component {

  deleteContent = (id, rev, awsKey) => {
    this.props.imagesActions.removeMiscProjectsThenUpdate(id, rev, awsKey);
  }

  render() {

    const {
      miscProjects,
    } = this.props;

    return (
      <div className="admin_login_container">
        {miscProjects.length > 2 && miscProjects.map((value, key) => {
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
                onClick={()=>this.deleteContent(value.id, value.doc._rev, value.value.awsKey)}
              >
                delete
              </div>
            </div>
          );
        })}

      </div>
    );
  }
}



export default connect(
  (state) => ({
    miscProjects: state.images.miscProjects,
  }),
  dispatch => ({
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(DatabaseList);
