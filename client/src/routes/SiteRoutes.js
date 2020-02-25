import React from 'react';
import {connect} from 'react-redux';
import {selectMenuDisplay} from 'reducers';

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

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    @media screen and (max-width: 992px) {
      overflow-y: ${props => (props.menuDisplay ? 'hidden' : 'auto')};
    }
  }
`

const SiteRoutes = ({skewValue, menuDisplay}) => {
  /* key prop rerenders component when it is the same component being used between routes */
  return (
    <>
      <BackgroundImageWrapper/>
      <GlobalStyle menuDisplay={menuDisplay}/>
      <Switch>

      <Route exact path={pageData.home} render={props => <Home {...props}/>}/>
        <Route exact path={pageData.miscProjects} render={props => <ProjectMisc {...props} skewValue={skewValue}/>}/>
        {
          Object.keys(projectData).map((key) => {
            return (
              <Route
                key={key}
                exact path={`${pageData.projects}/${key}`}
                render={props =>
                  <ProjectLayout pageValues={projectData[key]}
                    skewValue={skewValue}
                    {...props}
                  />
                }/>
            );
          })
        }
        <Route exact path={pageData.gaming} render={props => <GamingMisc {...props} skewValue={skewValue}/>}/>
        <Route component={NotFound} />
      </Switch>
      <MenuPanel/>
      <MenuButton/>
      <DetectMobile/>
    </>
  );
};


const mapStateToProps = (state) => {
  return {
    menuDisplay: selectMenuDisplay(state),
  };
};

export default connect(mapStateToProps, null)(SiteRoutes);