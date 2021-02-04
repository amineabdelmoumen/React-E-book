import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Navbar.jsx";
import SignIn from "./singnin.jsx";
import Fetch from "./fetch.jsx";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Switch>
            <Route path="/" component={Fetch} exact />
            <Route path="/signin" component={SignIn} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Home;
