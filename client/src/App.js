import React from 'react';

import SiteRoutesWrapper from 'routes/SiteRoutesWrapper';
import AppliedRoute from 'components/split/AppliedRoute';
import asyncComponent from 'components/split/AsyncComponent';
import {Switch, Route} from 'react-router-dom';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import {themeData} from 'data/themeData';
import TrackMouse from 'components/services/TrackMouse';
import CursorCircle from 'components/services/CursorCircle';

const AsyncAdmin = asyncComponent(() => import('routes/PassportCheck'));
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
      <GlobalStyle/>
      <TrackMouse>
        <StyledWrapper id="main_app">
          <Switch>
            <AppliedRoute
              path="/shodyra/admin"
              component={AsyncAdmin}
            />
            <Route path="/" render={(props) => <SiteRoutesWrapper {...props}/>}/>
          </Switch>
        </StyledWrapper>
      </TrackMouse>
      <CursorCircle/>
    </ThemeProvider>
  );
};

export default App;