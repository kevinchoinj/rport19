import React from 'react';

import 'App.css';

import SiteRoutesWrapper from 'routes/SiteRoutesWrapper';
import AppliedRoute from 'components/split/AppliedRoute';
import asyncComponent from 'components/split/AsyncComponent';
import {Switch, Route} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import {themeData} from 'data/themeData';
import TrackMouse from 'components/services/TrackMouse';
import CursorCircle from 'components/services/CursorCircle';

const AsyncAdmin = asyncComponent(() => import('routes/PassportCheck'));

const StyledWrapper = styled.div`
  -webkit-overflow-scrolling: touch;
  * {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
`;

const App = () => {
  return (
    <ThemeProvider theme={themeData}>
        <StyledWrapper id="main_app">
          <Switch>
            <AppliedRoute
              path="/shodyra/admin"
              component={AsyncAdmin}
            />
            <Route path="/" render={(props) => <SiteRoutesWrapper {...props}/>}/>
          </Switch>
        </StyledWrapper>
      <CursorCircle/>
    </ThemeProvider>
  );
};

export default App;