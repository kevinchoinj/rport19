import React from 'react';
import {Switch, Route} from 'react-router-dom';
import AdminMenu from 'admin/menu/AdminMenu';
import {pageData} from 'data/pageData';
import GetMiscProjects from 'components/services/GetMiscProjects';
import Admin from 'admin/pages/AdminHome';
import AdminMiscProjects from 'admin/pages/AdminMiscProjects';
import AdminMiscProjectsEdit from 'admin/pages/AdminMiscProjectsEdit';

const RoutesAdmin = () => {
  return (
    <div className="admin_panel">
      <GetMiscProjects/>
      <div className="admin_nav__left">
        <AdminMenu/>
      </div>
      <div className = "admin_right">
        <Switch>
          <Route exact path={pageData.adminHome} render={(props)=> <Admin {...props} />}/>
          <Route exact path={pageData.adminMiscProjects} render={(props)=><AdminMiscProjects {...props} />}/>
          <Route exact path={`${pageData.adminMiscProjects}/:id`} render={(props)=><AdminMiscProjectsEdit {...props} />}/>
        </Switch>
      </div>
      <div className="admin_nav__right"/>
    </div>
  );
};

export default RoutesAdmin;
