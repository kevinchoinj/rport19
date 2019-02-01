import React from 'react';

import {Switch, Route} from 'react-router-dom';

import ProjectMisc from 'pages/ProjectMisc';

import GamingMisc from 'pages/GamingMisc';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ProjectLayout from 'pages/ProjectLayout';

import MenuWrap from 'menu9/MenuWrap';
import MenuButton from 'menu9/MenuButton';

import {projectData} from 'data/projectData';

class SiteRoutes extends React.Component {
  render() {

    /* key prop rerenders component when it is the same component being used between routes */
    return (
      <div>
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props}/>}/>
          <Route exact path="/projects/misc" render={(props) => <ProjectMisc {...props}/>}/>
          {
            Object.keys(projectData).map((key, index) => {
              return (
                <Route exact path={'/projects/'+key} render={(props)=><ProjectLayout pageValues={projectData[key]} {...props} key={index}/>}/>
              );
            })
          }
          <Route exact path="/gaming" render={(props) => <GamingMisc {...props}/>}/>
          <Route component={NotFound} />
        </Switch>
        <MenuWrap/>
        <MenuButton/>
      </div>
    );
  }
}

export default SiteRoutes;
