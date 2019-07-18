import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as transitionActions from 'actions/transition';
import SiteRoutes from 'routes/SiteRoutes';
import TrackMouse from 'components/services/TrackMouse';

const SiteRoutesWrapper = ({loadContent, location}) => {
  useEffect(() => {
    let currentName = location.pathname;
    loadContent(currentName);
  });
  return (
    <TrackMouse>
      <SiteRoutes/>
    </TrackMouse>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadContent: (name) => dispatch(transitionActions.loadContent(name)),
  };
};

export default connect (null, mapDispatchToProps)(SiteRoutesWrapper);