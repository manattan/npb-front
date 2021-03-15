import React, { useState } from "react";
import { Heading, Input, Button, FormLabel } from "@chakra-ui/react";
import AdminContainer from "./Container"
import Error from "../Error";

const Admin: React.FC = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [error, setError] = useState<string | undefined>();
  const [id, setId] = useState<string | undefined>();
  const [pass, setPass] = useState<string | undefined>();

  const changeId = (e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
    setError(undefined);
  };

  const changePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
    setError(undefined);
  };

  const login = () => {
    if (id === "admin" && pass === "manattan") {
      setIsLogin(true);
    } else {
      setError("idまたはpasswordが異なります");
    }
  };

  if (isLogin) {
    return <AdminContainer />;
  } else {
    return (
      <div
        style={{
          textAlign: "center",
          width: "50%",
          margin: "40px auto",
        }}
      >
        <Heading>Search-NPB 管理画面</Heading>
        <FormLabel>id</FormLabel>
        <Input type="text" onChange={changeId} />
        <FormLabel>password</FormLabel>
        <Input type="password" onChange={changePass} />
        {error && <Error message={error} />}
        <Button onClick={login} style={{ margin: "20px auto" }}>
          ログイン
        </Button>
      </div>
    );
  }
};

export default Admin;
