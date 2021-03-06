import React from "react";
// Libraries
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Components
import Login from "./components/auth/Login";
import SignIn from "./components/auth/SignIn";
import Dashboard from "./components/projects/Dashboard";

import ProjectState from "./context/projects/projectSate";
import Project from "./components/projects/Project";

function App() {
  return (
    // Setting up the routing for the project everything outside the switch, is displayed on all components
    <ProjectState>
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </ProjectState>
  );
}

export default App;
