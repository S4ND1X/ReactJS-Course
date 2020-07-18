import React from "react";
import Login from "./components/auth/login";
import SignIn from "./components/auth/sign-in";
import Projects from "./components/projects/projects";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/sign-in" component={SignIn} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
    </Router>
  );
}

export default App;
