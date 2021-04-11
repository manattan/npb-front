import React from "react";
import { Heading } from "@chakra-ui/react";
import * as types from "../../types/main";
import Lists from "../Lists";

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
      <div style={{ margin: "40px auto", textAlign: "center" }}>
        <Heading size="md">検索結果</Heading>
        <Heading size="xs">
          キーワード: {props.location.state.name} ヒット数:{" "}
          {props.location.state.results.data.length}件
        </Heading>
      </div>
      <Lists lists={props.location.state.results.data} />
    </>
  );
};

export default ResultsKeyword;
