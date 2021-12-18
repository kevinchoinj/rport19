import React from "react";

import SiteRoutesWrapper from "routes/SiteRoutesWrapper";
import asyncComponent from "components/split/AsyncComponent";
import { Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { themeData } from "data/themeData";
import TrackMouse from "components/services/TrackMouse";
import CursorCircle from "components/services/CursorCircle";
import { projectData } from "data/projectData";

import Home from "pages/Home";
import ProjectLayout from "pages/ProjectLayout";
import NotFound from "pages/NotFound";

import { pageData } from "data/pageData";

import Admin from "admin/pages/AdminHome";
import AdminMiscProjects from "admin/pages/AdminMiscProjects";
import AdminMiscProjectsEdit from "admin/pages/AdminMiscProjectsEdit";

const AsyncMisc = asyncComponent(() => import("pages/ProjectMisc"));
const AsyncGaming = asyncComponent(() => import("pages/GamingMisc"));
const AsyncAdmin = asyncComponent(() => import("routes/PassportCheck"));

const StyledWrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    ::selection {
      background: ${props => props.theme.colorTheme};
    }
    ::-moz-selection {
      background: ${props => props.theme.colorTheme};
    }
  }
`;

const GlobalStyle = createGlobalStyle`
  body{
    width:100%;
    overflow-x: hidden;
    background-color: #101010;
    margin: 0;
    font-family: 'Open Sans', Helvetica, sans-serif;
  }
  :root {
    --size-smallest: .5vw;
    --size-small: .7vw;
    --size-medium: 1.2vw;
    --size-large: 2vw;
    --size-xlarge: 4.5vw;

    --size-spacing: 2vw;
    --size-spacing-small: 1.5vw;
    --size-spacing-large: 6vw;
  }
  @media screen and (max-width: 1920px ) {
    :root {
      --size-smallest: 1rem;
      --size-small: 1rem;
      --size-medium: 1.5rem;
      --size-large: 3rem;
      --size-xlarge: 3rem;
      --size-spacing: 2rem;
      --size-spacing-small: 1.5rem;
      --size-spacing-large: 6rem;
    }
  }
  body * {
    scrollbar-width: thin;
    scrollbar-color:  #f1f1f1 #888;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  ::-webkit-scrollbar-thumb {
    background: #888;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={themeData}>
      <GlobalStyle />
      <TrackMouse>
        <StyledWrapper id="main_app">
          <Routes>
            <Route
              path="/shodyra/admin"
              element={<AsyncAdmin />}
            >
              <Route exact path={pageData.adminHome} element={<Admin />} />
              <Route exact path={pageData.adminMiscProjects} element={<AdminMiscProjects />} />
              <Route exact path={`${pageData.adminMiscProjects}/:id`} element={<AdminMiscProjectsEdit />} />
            </Route>
            <Route path="/" element={<SiteRoutesWrapper />}>
              <Route exact path={pageData.home} element={<Home />} />
              <Route
                path={pageData.miscProjects}
                element={<AsyncMisc />}
              />
              {Object.keys(projectData).map((key) => {
                return (
                  <Route
                    exact path={`${pageData.projects}/${key}`}
                    element={<ProjectLayout key={key} pageValues={projectData[key]} />} />
                );
              })
              }
              <Route
                path={pageData.gaming}
                element={<AsyncGaming />}
              />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </StyledWrapper>
      </TrackMouse>
      <CursorCircle />
    </ThemeProvider>
  );
};

export default App;