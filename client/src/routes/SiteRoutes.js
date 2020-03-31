import React from 'react';

import {Switch, Route} from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import ProjectLayout from 'pages/ProjectLayout';

import MenuPanel from 'menu9/MenuPanel';
import MenuButton from 'menu9/MenuButton';

import {projectData} from 'data/projectData';
import {pageData} from 'data/pageData';
import BackgroundImageWrapper from 'menu9/BackgroundImageWrapper';
import StyledGlobal from 'components/services/StyledGlobal';

import AppliedRoute from 'components/split/AppliedRoute';
import asyncComponent from 'components/split/AsyncComponent';
const AsyncMisc = asyncComponent(() => import('pages/ProjectMisc'));
const AsyncGaming = asyncComponent(() => import('pages/GamingMisc'));


const SiteRoutes = () => {
  /* key prop rerenders component when it is the same component being used between routes */
  return (
    <>
      <BackgroundImageWrapper/>
      <StyledGlobal/>
      <Switch>
        <Route exact path={pageData.home} render={props => <Home {...props}/>}/>
        <AppliedRoute
          path={pageData.miscProjects}
          component={AsyncMisc}
        />
        {
          Object.keys(projectData).map((key) => {
            return (
              <Route
                key={key}
                exact path={`${pageData.projects}/${key}`}
                render={props =>
                  <ProjectLayout pageValues={projectData[key]}
                    {...props}
                  />
                }/>
            );
          })
        }
        <AppliedRoute
          path={pageData.gaming}
          component={AsyncGaming}
        />
        <Route component={NotFound} />
      </Switch>
      <MenuPanel/>
      <MenuButton/>
    </>
  );
};

export default SiteRoutes;