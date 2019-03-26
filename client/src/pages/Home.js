import React from 'react';
import Background from 'components/Background';
import Logo from 'components/Logo';
import Contact from 'components/Contact';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as pagesActions from 'actions/pages';
import * as menuActions from 'actions/menu';

class Home extends React.Component{
  componentDidMount() {
    this.props.pagesActions.setPage('home');
    this.props.menuActions.toggleMenu(false);
  }
  render(){
    return(
      <React.Fragment>
        <Background/>
        <Logo/>
        <Contact/>
      </React.Fragment>
    );
  }
}


export default connect(
  () => ({
  }),
  dispatch => ({
    menuActions: bindActionCreators(menuActions, dispatch),
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(Home);
