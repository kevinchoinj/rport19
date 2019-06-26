import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import * as transitionActions from 'actions/transition';
import SkewWrapper from 'routes/SkewWrapper';
import TrackMouse from 'components/services/TrackMouse';

const SiteRoutesWrapper = ({loadContent, location}) => {
  useEffect(() => {
    let currentName = location.pathname;
    loadContent(currentName);
  });
  return (
    <TrackMouse>
      <SkewWrapper/>
    </TrackMouse>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadContent: (name) => dispatch(transitionActions.loadContent(name)),
  };
};

export default connect (null, mapDispatchToProps)(SiteRoutesWrapper);