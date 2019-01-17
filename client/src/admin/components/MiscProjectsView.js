import React from 'react';
import { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as imagesActions from 'actions/images';

class DatabaseList extends Component {

  deleteContent = (id, rev, awsKey) => {
    this.props.imagesActions.removeMiscProjectsThenUpdate(id, rev, awsKey);
  }

  render() {

    const {
      miscProjects,
    } = this.props;

    return (
      <div>
        {miscProjects.length > 2 ? miscProjects.map((value, key) => {
          return (
            <div className="misc_image__container" key={key}>
              <div className="misc_title">
                {value.value.name}
              </div>
              <a
                href={value.value.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={value.value.url} alt={value.value.name} className="misc_image"/>
              </a>
              <div onClick={()=>this.deleteContent(value.id, value.doc._rev, value.value.awsKey)}>
                delete
              </div>
              <br/><br/>
            </div>
          );
        }):null}

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
