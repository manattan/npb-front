import React from "react";
import { Link, useHistory } from "react-router-dom";
import {
  Menu,
  Button,
  IconButton,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
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

interface Props {
  isLoading: boolean;
}

const Header: React.FC<Props> = (props: Props) => {
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

  const logout = async () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push({ pathname: "/" });
        window.location.reload();
      })
      .catch((e) => {
        console.error(e);
      });
  };

  return (
    <HeaderContainer isLoading={props.isLoading}>
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
              <Menu>
                <MenuButton
                  style={{ marginTop: "10px" }}
                  as={Button}
                  rightIcon={<GrUser />}
                >
                  {user.name}
                </MenuButton>
                <MenuList>
                  <MenuItem>マイページ</MenuItem>
                  <MenuDivider />
                  <MenuItem onClick={logout}>ログアウト</MenuItem>
                </MenuList>
              </Menu>
            </RightObj>
            {user.name === "茂木貴紀 elms" && (
              <RightObj>
                <Button
                  style={{ marginTop: "10px" }}
                  onClick={() => history.push("/admin")}
                >
                  管理画面
                </Button>
              </RightObj>
            )}
          </>
        )}
        {!user && (
          <RightObj>
            <Button style={{ marginTop: "10px" }} onClick={login}>
              ログインして編集をリクエスト！
            </Button>
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
