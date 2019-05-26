import React, {useEffect} from 'react';
import Background from 'components/Background';
import Logo from 'components/Logo';
import Contact from 'components/Contact';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';

export const Home = ({toggleMenu}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    toggleMenu();
  }, [toggleMenu]);

  return(
    <>
      <Background/>
      <Logo/>
      <Contact/>
    </>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleMenu: () => dispatch(menuActions.toggleMenu(false)),
  };
};

export default connect (null, mapDispatchToProps)(Home);
