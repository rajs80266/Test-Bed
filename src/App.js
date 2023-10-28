import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

import Shell from './Shell';

const App = () => {
  return (
    <BrowserRouter>
      <Shell>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <HomePage />}
          />
        </Switch>
      </Shell>
    </BrowserRouter>
  );
};

export default App;