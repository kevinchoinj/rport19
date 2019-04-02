import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as transitionActions from 'actions/transition';
import SiteRoutes from 'routes/SiteRoutes';

class SiteRoutesWrapper extends React.Component {

  componentDidMount(){
    let currentName = this.props.location.pathname;
    this.props.transitionActions.loadContent(currentName);
  }
  componentWillReceiveProps(nextProps) {
    let currentName = this.props.location.pathname;
    let nextName = nextProps.location.pathname;
    this.props.transitionActions.loadContent(currentName);
    this.props.transitionActions.loadContent(nextName);
  }
  render() {
    return (
      <SiteRoutes/>
    );
  }
}
export default connect(
  () => ({
  }),
  dispatch => ({
    transitionActions: bindActionCreators(transitionActions, dispatch),

  }),
)(SiteRoutesWrapper);
