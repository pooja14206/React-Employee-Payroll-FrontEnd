import React, { Component } from "react";
import Home from "../home/Home"
import Add from "../add/Add";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Update from "../update/Update";

export default class Routing extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/add" component={Add} />
        <Route path="/update" component={Update} />
      </Router>
    );
  }
}