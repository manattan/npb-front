import React, { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { getListsByKey } from "../../API/main";
import Error from "../Error";

const KeyButtonContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const KeyButton = styled.div<{ width: number }>`
  height: 100%;
  margin: 10px auto;
  padding: 5px 0;
  width: ${(props) => props.width}px;
  border-radius: 10px;
  background-color: #f5f5f5;
  cursor: pointer;
  box-shadow: 0 3px #dcdcdc;
  &:active {
    position: relative;
    box-shadow: none;
    top: 3px;
  }
`;

const SearchKeyword: React.FC = () => {
  const [key, setKey] = useState<string | undefined>("");
  const [error, setError] = useState<string | undefined>(undefined);
  const history = useHistory();
  const width = window.innerWidth;

  useEffect(() => {
    setKey("");
  }, []);

  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKey(e.target.value);
    setError(undefined);
  };
  const usePost = async () => {
    if (!key) {
      setError("キーワードを入力してください");
      return;
    }
    const results = await getListsByKey(key);
    console.log(results);
    history.push({
      pathname: "/results/keyword",
      state: { results, name: key },
    });
  };

  return (
    <>
      <FormControl>
        <FormLabel>キーワードで検索する</FormLabel>
        <Input type="text" onChange={changeValue} />
        <FormHelperText>キーワードは1つまで対応しています. </FormHelperText>
        {error && <Error message={error} />}
      </FormControl>
      <KeyButtonContainer>
        <KeyButton width={width / 4} onClick={usePost}>
          検索する
        </KeyButton>
      </KeyButtonContainer>
    </>
  );
};

export default SearchKeyword;
