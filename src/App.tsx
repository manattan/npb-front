import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";
import Header from "./components/Header";
import SearchTeam from "./components/Team/Search";
import ResultsTeam from "./components/Team/Results";
import ResultsKeyword from "./components/Keyword/Results";
import styled from "styled-components";

const Div = styled.div`
  width: 98%;
  margin: 20px auto;
  border-bottom: 2px solid #c7c7c7;
`;

const App: React.FC = () => {
  return (
    <div style={{ padding: "30px" }}>
      <Router>
        <Header />
        <Div />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/search/team" component={SearchTeam} />
          <Route exact path="/results/team" component={ResultsTeam} />
          <Route exact path="/results/keyword" component={ResultsKeyword} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
