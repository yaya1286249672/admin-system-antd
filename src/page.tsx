/*
 * @Author: wangya 
 * @Date: 2020-12-01 10:24:20 
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2020-12-02 10:38:59
 */
import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import Login from './components/pages/login';
import Container from './container';

export default () => (
  <Router>
      <Switch>
          {/* <Route exact path="/" render={() => <Redirect to="/app/dashboard/index" push />} /> */}
          <Route path="/app" component={Container} />
          <Route path="/404" component={NotFound} />
          <Route path="/login" component={Login} />
          <Route component={NotFound} />
      </Switch>
  </Router>
);