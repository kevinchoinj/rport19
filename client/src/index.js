import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {Provider} from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Store, { history } from './store';
import * as serviceWorker from './serviceWorker';

const StoreInstance = Store();

ReactDOM.render(
  <Provider store={StoreInstance}>
    <BrowserRouter history={history}>
      <App />
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

serviceWorker.unregister();
