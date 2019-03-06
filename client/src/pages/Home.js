import React from 'react';
import Background from 'components/Background';
import Logo from 'components/Logo';
import Contact from 'components/Contact';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as pagesActions from 'actions/pages';

class Home extends React.Component{
  componentDidMount() {
    this.props.pagesActions.setPage('home');
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
    pagesActions: bindActionCreators(pagesActions, dispatch),
  }),
)(Home);
