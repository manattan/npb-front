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
      number: number;
    };
  };
};

const ResultsNumber: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div style={{ margin: "40px auto", textAlign: "center" }}>
        <Heading size="md">検索結果</Heading>
      </div>
      <Lists lists={props.location.state.results.data} />
    </>
  );
};

export default ResultsNumber;
