import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import SearchTeam from "./components/Team/Search"
import ResultsTeam from "./components/Team/Results"
import ResultsKeyword from "./components/Keyword/Results";
import styled from "styled-components";

const Div = styled.div`
  width: 98%;
  margin: 0 auto;
  margin-bottom: 20px;
  border-bottom: 2px solid #c7c7c7;
`;

const App: React.FC = () => {
  return (
    <>
      <Router>
        <Link to="/">トップに戻る</Link>
        <h1>Search-NPB</h1>
        <p>NPBの背番号の歴史を調べることができるサイトです</p>
        <Div />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/search/team" component={SearchTeam} />
          <Route exact path="/results/team" component={ResultsTeam} />
          <Route exact path="/results/keyword" component={ResultsKeyword} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
