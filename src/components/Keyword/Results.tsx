import React, { useEffect, useState } from "react";
import * as types from "../../types/main";
import { list } from "../../lib/main";
import SearchKeyword from "./Search";
import { KeywordContainer, Li } from "../StyledComponent/index";

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
      <KeywordContainer>
        <SearchKeyword />
      </KeywordContainer>
      <h1>検索結果</h1>
      <p>キーワード: {props.location.state.name}</p>
      <p>ヒット数: {props.location.state.results.data.length}件</p>
      <ul>{data}</ul>
    </>
  );
};

export default ResultsKeyword;
