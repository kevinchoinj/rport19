import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {loadContent} from 'actions/transition';
import SiteRoutes from 'routes/SiteRoutes';

const SiteRoutesWrapper = ({loadContent, location}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    let currentName = location.pathname;
    loadContent(currentName);
  }, [location]);
  return (
    <SiteRoutes/>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    loadContent: (name) => dispatch(loadContent(name)),
  };
};

export default connect (null, mapDispatchToProps)(SiteRoutesWrapper);