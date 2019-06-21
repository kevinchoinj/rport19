import React from 'react';

import 'App.css';

import SiteRoutesWrapper from 'routes/SiteRoutesWrapper';
import SkewCalc from 'components/services/SkewCalc';
import DetectMobile from 'components/services/DetectMobile';
import DetectEdge from 'components/services/DetectEdge';
import AppliedRoute from 'components/split/AppliedRoute';
import asyncComponent from 'components/split/AsyncComponent';
import {Switch, Route} from 'react-router-dom';
import styled, {ThemeProvider} from 'styled-components';
import {themeData} from 'data/themeData';

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
        <SkewCalc/>
        <DetectMobile/>
        <DetectEdge/>
        <Switch>
          <AppliedRoute
            path="/shodyra/admin"
            component={AsyncAdmin}
          />
          <Route path="/" render={(props) => <SiteRoutesWrapper {...props}/>}/>
        </Switch>
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default App;