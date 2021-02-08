import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Main from "./components/Main";
import Team from "./components/Team";
import Number from "./components/Number";
import Results from "./components/Results";
import styled from "styled-components";

const Div = styled.div`
  width: 90%;
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
          <Route exact path="/team" component={Team} />
          <Route exact path="/number" component={Number} />
          <Route exact path="/results" component={Results} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
