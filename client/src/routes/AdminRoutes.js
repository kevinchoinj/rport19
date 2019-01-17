import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Scrollbar from 'smooth-scrollbar';

import AdminMenu from 'admin/menu/AdminMenu';

import {pageData} from 'data/pageData';

import Admin from 'admin/pages/AdminHome';
import AdminMiscProjects from 'admin/pages/AdminMiscProjects';

class RoutesAdmin extends Component {

  componentDidMount() {
    Scrollbar.init(document.querySelector('#admin_panel'), {
      alwaysShowTracks: true,
      syncCallbacks: true,
    });
  }

  render() {
    return (
      <div className="admin_panel" id="admin_panel">
        <div className="admin_nav__left">
          <AdminMenu/>
        </div>

        <div className = "admin_right">
          <Switch>
            <Route exact path={pageData.adminHome} render={(props)=> <Admin {...props} />}/>
            <Route exact path={pageData.adminMiscProjects} render={(props)=><AdminMiscProjects {...props} />}/>
          </Switch>
        </div>

        <div className="admin_nav__right"/>
      </div>
    );
  }
}

export default RoutesAdmin;
