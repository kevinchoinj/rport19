import React from 'react';
import {Link} from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {pageData} from 'data/pageData';
import * as authActions from 'actions/authentication';

class AdminMenu extends React.Component {

  signOut = () => {
    this.props.authActions.signOutUser();
  }
  render(){

    const menuValues = [
      {text: 'Admin Home', link: pageData.adminHome},
      {text: 'Edit Gallery', link: pageData.adminMiscProjects},
    ];

    return (
      <div className="admin_menu_wrapper">
        {menuValues.map((value, index)=>(
          <div key={index}>
            <Link
              to={value.link}
              className = 'admin_nav__link'
            >
              {value.text}
            </Link>
          </div>
        ))}
        <div
          className="admin_nav__link"
          onClick={()=>this.signOut()}
        >
        Log Out
        </div>
      </div>
    );
  }
}

export default connect(
  (state, ownProps) => ({
  }),
  dispatch => ({
    authActions: bindActionCreators(authActions, dispatch),
  }),
)(AdminMenu);

