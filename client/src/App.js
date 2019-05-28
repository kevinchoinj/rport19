import React from 'react';

import 'App.css';

import SiteRoutesWrapper from 'routes/SiteRoutesWrapper';
import SkewCalc from 'components/SkewCalc';
import AppliedRoute from 'components/split/AppliedRoute';
import asyncComponent from 'components/split/AsyncComponent';
import {Switch, Route} from 'react-router-dom';

const AsyncAdmin = asyncComponent(() => import('routes/PassportCheck'));

const App = () => {
  return (
    <div className="App" id="main_app">
      <SkewCalc/>
      <Switch>
        <AppliedRoute
          path="/shodyra/admin"
          component={AsyncAdmin}
        />
        <Route path="/shodyra/admin" render={(props) => <AsyncAdmin {...props}/>}/>
        <Route path="/" render={(props) => <SiteRoutesWrapper {...props}/>}/>
      </Switch>
    </div>
  );
};

export default App;