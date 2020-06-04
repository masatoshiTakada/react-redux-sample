import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route path="/app" component={App} />
    </Router>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
