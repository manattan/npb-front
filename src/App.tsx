import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Team from "./components/Team";
import Number from "./components/Number";
import Results from "./components/Results";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/number" component={Number} />
        <Route exact path="/results" component={Results} />
      </Switch>
    </Router>
  );
};

export default App;
