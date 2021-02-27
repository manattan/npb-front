import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import { Li } from "../StyledComponent/index";
import { Data } from "../../types/main";
import Header from "../Header";
import { Div } from "../StyledComponent/index";

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
  const [lists, setLists] = useState<Array<JSX.Element> | string>(
    "少々お待ちください..."
  );

  useEffect(() => {
    const data: Array<JSX.Element> = [];
    for (const tmp of props.location.state.results.data) {
      data.push(
        <Li key={tmp.id}>
          <p>背番号: {tmp.num}</p>
          <p>{tmp.history}</p>
        </Li>
      );
    }
    setLists(data);
  }, [props]);
  return (
    <>
      <Header />
      <Div />
      <div style={{ margin: "40px auto", textAlign: "center" }}>
        <Heading size="md">検索結果: {props.location.state.name}</Heading>
      </div>
      <ul>{lists}</ul>
    </>
  );
};

export default ResultsTeam;
