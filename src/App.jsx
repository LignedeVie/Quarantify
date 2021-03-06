import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './View/Home/Home';
import Login from './View/Login';
import Register from './View/Register';
import Challenge from './View/Challenge';
import Social from './View/Social';
import Activity from './View/Activity/Activity';
import LeaderBoard from './View/LeaderBoard';
import StartingPage from './View/StartingPage/StartingPage';

import PrivateRoute from './Components/PrivateRoute';
import AppWrapper from './Components/AppWrapper';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <PrivateRoute path="/start" component={StartingPage} />
        <AppWrapper>
          <PrivateRoute path="/challenge" component={Challenge} />
          <PrivateRoute path="/social" component={Social} />
          <PrivateRoute path="/leaderboard" component={LeaderBoard} />
          <PrivateRoute path="/activity" component={Activity} />
          <PrivateRoute path="/" exact component={Home} />
        </AppWrapper>
      </Switch>
    </Router>
  );
};

export default App;
