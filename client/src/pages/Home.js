import React, {useEffect} from 'react';
import Background from 'components/home//Background';
import Logo from 'components/home/Logo';
import Contact from 'components/home/Contact';
import {connect} from 'react-redux';
import * as menuActions from 'actions/menu';

export const Home = ({toggleMenu}) => {
  useEffect(() => {
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
