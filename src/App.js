import React from 'react';
import Main from './components/index';
import {
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/app/main" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
