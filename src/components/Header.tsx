import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Heading, Text, GridItem, Grid, Button } from "@chakra-ui/react";
import firebase from "../lib/firebase";
import { registerUser } from "../API/main";

const Header: React.FC = () => {
  const history = useHistory();
  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await firebase.auth().signInWithPopup(provider);
    console.log(res.user);
    const userData = {
      uid: res.user?.uid,
      email: res.user?.email,
      name: res.user?.displayName,
    };
    const results = await registerUser(userData);
    console.log(results);
    if (results.ok) {
      console.log("OK");
      history.push({ pathname: "/" });
    } else {
      return;
    }
  };

  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={5}>
          <Link to="/">
            <Heading>Search-NPB</Heading>
          </Link>
          <Text>NPBの背番号の歴史を調べることができるサイトです</Text>
        </GridItem>
        <GridItem colSpan={1} style={{ textAlign: "right" }}>
          <Button onClick={login}>ログイン</Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default Header;
