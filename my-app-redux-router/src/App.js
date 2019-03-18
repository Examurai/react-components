import React, { Component } from "react";
import { Route, Switch, Router } from "react-router";
import Chart from "./containers/Chart/Chart";
import Empty from "./components/Empty/Empty";
import "./App.css";
import { history } from "./store/index";

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/chart" component={Chart} />
          <Route path="/" component={Empty} />
        </Switch>
      </Router>
    );
  }
}
