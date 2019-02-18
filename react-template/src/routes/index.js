import React from 'react';
import { Route, Switch, Router } from 'react-router';
import TestPage from '../pages/TestPage';
import { history } from '../store';

export default () => (
  <Router history={history}>
    <Switch>
	    <Route path='/test-page' component={TestPage} />
    </Switch>
  </Router>
);