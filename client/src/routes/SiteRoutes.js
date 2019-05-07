import React from 'react';

import {Switch, Route} from 'react-router-dom';
import ProjectMisc from 'pages/ProjectMisc';
import GamingMisc from 'pages/GamingMisc';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ProjectLayout from 'pages/ProjectLayout';

import MenuPanel from 'menu9/MenuPanel';
import MenuButton from 'menu9/MenuButton';

import DetectMobile from 'components/services/DetectMobile';

import {projectData} from 'data/projectData';
import {pageData} from 'data/pageData';
import BackgroundImageWrapper from 'menu9/BackgroundImageWrapper';

const SiteRoutes = () => {
  /* key prop rerenders component when it is the same component being used between routes */
  return (
    <React.Fragment>
      <Switch>
        <Route exact path={pageData.home} render={(props) => <Home {...props}/>}/>
        <Route exact path={pageData.miscProjects} render={(props) => <ProjectMisc {...props}/>}/>
        {
          Object.keys(projectData).map((key, index) => {
            return (
              <Route
                key={index}
                exact path={`${pageData.projects}/${key}`}
                render={(props) =>
                  <ProjectLayout pageValues={projectData[key]}
                    {...props}
                  />
                }/>
            );
          })
        }
        <Route exact path={pageData.gaming} render={(props) => <GamingMisc {...props}/>}/>
        <Route component={NotFound} />
      </Switch>
      <BackgroundImageWrapper/>
      <MenuPanel/>
      <MenuButton/>
      <DetectMobile/>
    </React.Fragment>
  );
};

export default SiteRoutes;
