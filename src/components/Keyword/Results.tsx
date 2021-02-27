import React, { useEffect, useState } from "react";
import { Heading } from "@chakra-ui/react";
import * as types from "../../types/main";
import { list } from "../../lib/main";
import SearchKeyword from "./Search";
import { KeywordContainer, Li } from "../StyledComponent/index";
import Header from "../Header";
import { Div } from "../StyledComponent/index";

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
  const [data, setData] = useState<Array<JSX.Element> | string>(
    "少しお待ちください"
  );

  const getTeam = (team: string) => {
    for (const tmp of list) {
      if (tmp.team === team) {
        return tmp.name;
      }
    }
  };
  useEffect(() => {
    const result = [];
    for (const tmp of props.location.state.results.data) {
      result.push(
        <Li key={tmp.id}>
          <p>{getTeam(tmp.teamname)}</p>
          <p>背番号: {tmp.num}</p>
          <p>{tmp.history}</p>
        </Li>
      );
    }

    setData(result);
  }, [props]);

  return (
    <>
      <Header />
      <Div />
      <KeywordContainer>
        <SearchKeyword />
      </KeywordContainer>
      <div style={{ margin: "40px auto", textAlign: "center" }}>
        <Heading size="md">検索結果</Heading>
        <Heading size="xs">
          キーワード: {props.location.state.name} ヒット数:{" "}
          {props.location.state.results.data.length}件
        </Heading>
      </div>
      <ul>{data}</ul>
    </>
  );
};

export default ResultsKeyword;
