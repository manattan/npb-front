import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Heading,
  Text,
  GridItem,
  Grid,
  Button,
  IconButton,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrUser } from "react-icons/gr";
import { useRecoilState } from "recoil";
import firebase from "../lib/firebase";
import { registerUser } from "../API/main";
import { User } from "../types/main";
import { userState } from "../store/main";
import {
  HeaderContainer,
  LeftContainer,
  LeftObj,
  RightContainer,
  RightObj,
  HamburgerContainer,
} from "./StyledComponent/header";

const Header: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useRecoilState(userState);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const res = await firebase.auth().signInWithPopup(provider);
    console.log(res.user);
    const userData: User = {
      uid: res.user?.uid,
      email: res.user?.email,
      name: res.user?.displayName,
    };
    const results = await registerUser(userData);
    console.log(results);
    if (results.ok) {
      setUser(userData);
      history.push({ pathname: "/" });
    } else {
      return;
    }
  };
  return (
    <HeaderContainer>
      <LeftContainer>
        <LeftObj>
          <Link to="/">
            <h1>Search-NPB</h1>
          </Link>
        </LeftObj>
      </LeftContainer>
      <RightContainer>
        {user && (
          <>
            <RightObj>
              <IconButton aria-label="user" icon={<GrUser />} />
            </RightObj>
            {user.name === "茂木貴紀 elms" && (
              <RightObj>
                <Button onClick={() => history.push("/admin")}>管理画面</Button>
              </RightObj>
            )}
          </>
        )}
        {!user && (
          <RightObj>
            <Button onClick={login}>ログイン</Button>
          </RightObj>
        )}
      </RightContainer>
      <HamburgerContainer>
        <IconButton aria-label="menu" icon={<GiHamburgerMenu />} />
      </HamburgerContainer>
    </HeaderContainer>
  );
};

export default Header;
