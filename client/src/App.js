import React from 'react';

import 'App.css';
import 'styles/projects.css';
import 'styles/menu.css';
import 'styles/gaming.css';
import 'styles/notfound.css';

import 'styles/admin.css';

import SiteRoutesWrapper from 'routes/SiteRoutesWrapper';
import PassportCheck from 'routes/PassportCheck';
import SkewCalc from 'components/SkewCalc';

import {Switch, Route} from 'react-router-dom';

const App = () => {
  return (
    <div className="App" id="main_app">
      <Switch>
        <Route path="/shodyra/admin" render={(props) => <PassportCheck {...props}/>}/>
        <Route path="/" render={(props) => <SiteRoutesWrapper {...props}/>}/>
      </Switch>
    </div>
  );
};

export default App;