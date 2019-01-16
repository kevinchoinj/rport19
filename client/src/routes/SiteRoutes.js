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

          <Route exact path="/projects/uwloo" render={(props)=><ProjectLayout pageValues={projectData.uwloo} {...props} key="uwloo"/>}/>
          <Route exact path="/projects/wildcat" render={(props)=><ProjectLayout pageValues={projectData.wildcat} {...props} key="wildcat"/>}/>
          <Route exact path="/projects/tcfs" render={(props)=><ProjectLayout pageValues={projectData.tcfs} {...props} key="tcfs"/>}/>
          <Route exact path="/projects/discord" render={(props)=><ProjectLayout pageValues={projectData.discord} {...props} key="discord"/>}/>
          <Route exact path="/projects/lastfm" render={(props)=><ProjectLayout pageValues={projectData.lastfm} {...props} key="lastfm"/>}/>
          <Route exact path="/projects/leida" render={(props)=><ProjectLayout pageValues={projectData.leida} {...props} key="leida"/>}/>
          <Route exact path="/projects/wns" render={(props)=><ProjectLayout pageValues={projectData.wns} {...props} key="wns"/>}/>
          <Route exact path="/projects/drjart" render={(props)=><ProjectLayout pageValues={projectData.drjart} {...props} key="drjart"/>}/>
          <Route exact path="/projects/library" render={(props)=><ProjectLayout pageValues={projectData.library} {...props} key="library"/>}/>
          <Route exact path="/projects/delilah" render={(props)=><ProjectLayout pageValues={projectData.delilah} {...props} key="delilah"/>}/>
          <Route exact path="/projects/harvard" render={(props)=><ProjectLayout pageValues={projectData.harvard} {...props} key="harvard"/>}/>

          <Route exact path="/projects/misc" render={(props) => <ProjectMisc {...props}/>}/>

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
