import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as gitActions from 'actions/git';

class FetchGit extends React.Component {
  componentDidMount() {
    this.props.gitActions.fetchGit();
  }
  render() {
    return null;
  }
}

export default connect(
  () => ({
  }),
  dispatch => ({
    gitActions: bindActionCreators(gitActions, dispatch),
  }),
)(FetchGit);
