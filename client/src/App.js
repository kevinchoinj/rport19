import React from 'react';

import 'App.css';
import 'styles/home.css';
import 'styles/projects.css';
import 'styles/menunine.css';
import 'styles/gaming.css';
import 'styles/preload.css';
import 'styles/animations.css';
import 'styles/notfound.css';

import 'styles/admin.css';

import SiteRoutes from 'routes/SiteRoutes';
import AdminRoutes from 'routes/AdminRoutes';

import Preload from 'components/Preload';
import PageLoading from 'components/PageLoading';

import {Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App" id="main_app">
        <Switch>
          <Route path="/shodyra/admin" render={(props) => <AdminRoutes {...props}/>}/>
          <Route path="/" render={(props) => <SiteRoutes {...props}/>}/>
        </Switch>
        <Preload/>
        <PageLoading/>
      </div>
    );
  }
}

export default App;