import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useRecoilState } from "recoil";
import Admin from "./components/Admin/index";
import Main from "./components/Main";
import Edit from "./components/Edit";
import SearchTeam from "./components/Team/Search";
import ResultsTeam from "./components/Team/Results";
import ResultsKeyword from "./components/Keyword/Results";
import SearchNumber from "./components/Number/Search";
import ResultsNumber from "./components/Number/Results";
import Footer from "./components/Footer";
import NotFound from "./components/NotFound";
import { userState } from "./store/main";
import firebase from "./lib/firebase";
import Loading from "./components/Loading";
import { AppContainer, MainContainer } from "./components/StyledComponent";

const App: React.FC = () => {
  const [user, setUser] = useRecoilState(userState);
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingChildren, setLoadingChildren] = useState<boolean>(false);

  useEffect(() => {
    if (!user) {
      firebase.auth().onAuthStateChanged((u) => {
        if (u) {
          setUser({
            uid: u?.uid,
            email: u?.email,
            name: u?.displayName,
          });
          setLoading(false);
        } else {
          setLoading(false);
        }
      });
    }
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return <div />;
  } else {
    return (
      <AppContainer>
        <MainContainer isLoading={loadingChildren}>
          <Router>
            <Switch>
              <Route
                exact
                path="/"
                component={() => <Main setLoading={setLoadingChildren} />}
              />
              <Route exact path="/edit" component={Edit} />
              <Route exact path="/admin" component={Admin} />
              <Route
                exact
                path="/search/team"
                component={() => <SearchTeam setLoading={setLoadingChildren} />}
              />
              <Route
                exact
                path="/search/number"
                component={() => (
                  <SearchNumber setLoading={setLoadingChildren} />
                )}
              />
              <Route exact path="/results/team" component={ResultsTeam} />
              <Route exact path="/results/number" component={ResultsNumber} />
              <Route exact path="/results/keyword" component={ResultsKeyword} />
              <Route component={NotFound} />
            </Switch>
            <Footer />
          </Router>
        </MainContainer>
        <Loading isLoading={loadingChildren} />
      </AppContainer>
    );
  }
};

export default App;
