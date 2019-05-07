import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import {pageData} from 'data/pageData';
import * as authActions from 'actions/authentication';

const AdminMenu = ({logOut}) => {
  const menuValues = [
    {text: 'Home', link: pageData.adminHome},
    {text: 'Edit Gallery', link: pageData.adminMiscProjects},
  ];
  return (
    <div className="admin_menu_wrapper">
      {menuValues.map((value, index) => (
        <div key={index}>
          <Link
            to={value.link}
            className = "admin_nav_link"
          >
            {value.text}
          </Link>
        </div>
      ))}
      <div
        className="admin_nav_link"
        onClick={() => logOut()}
      >
        Log Out
      </div>
      <div>
        <Link to={pageData.home} className = "admin_nav_link">
          Back to site
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: () => {
      dispatch(authActions.logout());
    },
  };
};

export default connect (null, mapDispatchToProps)(AdminMenu);
