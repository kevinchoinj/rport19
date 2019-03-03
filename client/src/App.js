import React from 'react';

import 'App.css';
import 'styles/home.css';
import 'styles/projects.css';
import 'styles/menu.css';
import 'styles/gaming.css';
import 'styles/preload.css';
import 'styles/animations.css';
import 'styles/notfound.css';

import 'styles/admin.css';

import SiteRoutes from 'routes/SiteRoutes';
import CheckLogin from 'routes/CheckLogin';

import {Switch, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div className="App" id="main_app">
        <Switch>
          <Route path="/shodyra/admin" render={(props) => <CheckLogin {...props}/>}/>
          <Route path="/" render={(props) => <SiteRoutes {...props}/>}/>
        </Switch>
      </div>
    );
  }
}

export default App;