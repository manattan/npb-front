import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import Admin from "./components/Admin";
import Main from "./components/Main";
import SearchTeam from "./components/Team/Search";
import ResultsTeam from "./components/Team/Results";
import ResultsKeyword from "./components/Keyword/Results";
import SearchNumber from "./components/Number/Search";
import ResultsNumber from "./components/Number/Results";
import Footer from "./components/Footer";
import { userState } from "./store/main";
import firebase from "./lib/firebase";

const App: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    if (!user) {
      firebase.auth().onAuthStateChanged((u) => {
        if (u) {
          setUser({
            uid: u?.uid,
            email: u?.email,
            name: u?.displayName,
          });
        }
        setLoading(false);
      });
    }
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div />;
  } else {
    return (
      <div style={{ padding: "30px" }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/search/team" component={SearchTeam} />
            <Route exact path="/search/number" component={SearchNumber} />
            <Route exact path="/results/team" component={ResultsTeam} />
            <Route exact path="/results/number" component={ResultsNumber} />
            <Route exact path="/results/keyword" component={ResultsKeyword} />
          </Switch>
          <Footer />
        </Router>
      </div>
    );
  }
};

export default App;
