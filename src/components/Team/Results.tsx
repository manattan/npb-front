import React from "react";
import { Heading } from "@chakra-ui/react";
import { Data } from "../../types/main";
import Header from "../Header";
import { Div } from "../StyledComponent/index";
import Lists from "../Lists";

type Props = {
  location: {
    state: {
      results: {
        data: Data[];
      };
      name: string;
    };
  };
};

const ResultsTeam: React.FC<Props> = (props: Props) => {
  return (
    <>
      <div style={{ margin: "40px auto", textAlign: "center" }}>
        <Heading size="md">検索結果: {props.location.state.name}</Heading>
      </div>
      <Lists lists={props.location.state.results.data} />
    </>
  );
};

export default ResultsTeam;
