import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as imagesActions from 'actions/images';

class GetMiscProjects extends React.Component {
  componentDidMount() {
    this.props.imagesActions.fetchMiscProjects();
  }
  render() {
    return null;
  }
}

export default connect(
  () => ({
  }),
  dispatch => ({
    imagesActions: bindActionCreators(imagesActions, dispatch),
  }),
)(GetMiscProjects);
