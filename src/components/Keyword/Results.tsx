import React from "react";
import { Heading } from "@chakra-ui/react";
import * as types from "../../types/main";
import SearchKeyword from "./Search";
import { KeywordContainer } from "../StyledComponent/index";
import Header from "../Header";
import { Div } from "../StyledComponent/index";
import Lists from "../Lists";
import { useHistory } from "react-router-dom";

type Props = {
  location: {
    state: {
      results: {
        data: types.Data[];
      };
      name: string;
    };
  };
};

const ResultsKeyword: React.FC<Props> = (props: Props) => {
    return (
      <>
        <Header />
        <Div />
        <div style={{ margin: "40px auto", textAlign: "center" }}>
          <Heading size="md">検索結果</Heading>
          <Heading size="xs">
            キーワード: {props.location.state.name} ヒット数:{" "}
            {props.location.state.results.data.length}件
          </Heading>
        </div>
        <Lists lists={props.location.state.results.data} />
      </>
  )
};

export default ResultsKeyword;
