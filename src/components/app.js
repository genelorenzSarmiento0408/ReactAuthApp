import React, { Component } from "react";
import { BrowserRouter, Switch, Route, Link, NavLink } from "react-router-dom";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Navigation from "./Navigation";
export default class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route exact path={"/"} component={Home} />

            <Route exact path={"/dashboard"} component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
