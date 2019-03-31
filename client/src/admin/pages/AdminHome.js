import React from 'react';
import GitView from 'admin/components/GitView';
import FetchGit from 'admin/services/FetchGit';

class AdminHome extends React.Component {
  render(){
    return (
      <div className="admin_home">
        Recent Changes
        <GitView/>
        <FetchGit/>
      </div>
    );
  }
}

export default AdminHome;
