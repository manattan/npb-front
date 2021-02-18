import React, { useState, useEffect } from "react";
import { Li } from "../StyledComponent/index";
import { Data } from "../../types/main";

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
        <Li key={Math.floor(Math.random() * Math.floor(50000))}>
          <p>背番号: {tmp.num}</p>
          <p>{tmp.history}</p>
        </Li>
      );
    }
    setLists(data);
  }, [props]);
  return (
    <>
      <h1>検索結果: {props.location.state.name}</h1>
      <ul>{lists}</ul>
    </>
  );
};

export default ResultsTeam;
