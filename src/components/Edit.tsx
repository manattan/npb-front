import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import * as types from "../types/main";
import { userState } from "../store/main";
import Header from "./Header";
import { Div } from "./StyledComponent";
import { Heading, Text, Textarea, Button } from "@chakra-ui/react";
import styled from "styled-components";
import { requestEdit } from "../API/main";

const OriginalDiv = styled.div`
  margin: 40px 15px;
  font-size: 90%;
  padding: 20px;
  background: #f5f5f5;
`;

const RequestButtonContainer = styled.div`
  margin-top: 20px;
  text-align: center;
`;

interface Props {
  location: {
    state: {
      data: types.Data;
    };
  };
}

const Edit: React.FC<Props> = (props: Props) => {
  const user = useRecoilValue(userState);
  const [reqBody, setReq] = useState<string>(props.location.state.data.history);

  const request = async () => {
    // eslint-disable-next-line
    if (user && confirm("編集リクエストを送信しますか？")) {
      const result = await requestEdit(
        {
          id: props.location.state.data.id,
          prevent: props.location.state.data.history,
          new: reqBody,
        },
        user
      );
      if (result.ok) {
        alert("編集リクエストが送信されました");
      } else {
        console.error(result);
      }
    }
  };

  return (
    <>
      <Header />
      <Div />
      <section>
        <Heading
          style={{
            width: "22.5rem",
            background: "linear-gradient(transparent 75%, orange 50%)",
            borderRadius: "5px",
          }}
        >
          編集をリクエストする
        </Heading>
        <Text>編集するデータID: {props.location.state.data.id}</Text>
        <OriginalDiv>
          元のデータ:
          <br />
          {props.location.state.data.history}
        </OriginalDiv>
        <div>
          <Text>リクエスト: </Text>
          <Textarea
            style={{
              minHeight: "200px",
            }}
            colorScheme="orange"
            focusBorderColor="orange.300"
            size="md"
            value={reqBody}
            onChange={(event) => setReq(event.target.value)}
          ></Textarea>
        </div>
        <RequestButtonContainer>
          <Button onClick={request}>編集をリクエスト</Button>
        </RequestButtonContainer>
      </section>
    </>
  );
};

export default Edit;
