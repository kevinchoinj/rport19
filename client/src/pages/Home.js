import React, {useEffect} from 'react';
import Background from 'components/home/BackgroundSvg';
import Logo from 'components/home/Logo';
import Contact from 'components/home/Contact';
import {connect} from 'react-redux';
import {toggleMenu} from 'actions/menu';
import TrackMouse from 'components/services/TrackMouse';

export const Home = ({toggleMenu}) => {
  useEffect(() => {
    toggleMenu();
  }, [toggleMenu]);

  return(
    <TrackMouse>
      <Background/>
      <Logo/>
      <Contact/>
    </TrackMouse>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(toggleMenu(false)),
  };
};

export default connect (null, mapDispatchToProps)(Home);
