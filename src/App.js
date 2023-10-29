import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';

import Shell from './Shell';
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import VideoGrid from './pages/Dashboard';
import Profile from './pages/Profile';

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
          <Route
            exact
            path="/login"
            render={() => <LoginPage />}
          />
          <Route
            exact
            path="/signup"
            render={() => <SignupPage />}
          />
          <Route
            exact
            path="/dashboard"
            render={() => <VideoGrid />}
          />
          <Route
            exact
            path="/profile"
            render={() => <Profile />}
          />
        </Switch>
      </Shell>
    </BrowserRouter>
  );
};

export default App;