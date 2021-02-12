/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Data } from "../../types/main";

type Props = {
  location: {
    state: {
      results: Data[];
      name: string;
    };
  };
};

const Li = styled.li`
  list-style: none;
`;

const ResultsTeam: React.FC<Props> = (props: Props) => {
  const [lists, setLists] = useState<Array<JSX.Element> | string>(
    "少々お待ちください..."
  );
  const results = props.location.state.results;

  useEffect(() => {
    const data: Array<JSX.Element> = [];
    for (let i = 0; i < results.length; i++) {
      data.push(
        <Li>
          <p>背番号: {results[i].num}</p>
          <p>{results[i].history}</p>
        </Li>
      );
    }
    setLists(data);
  }, []);
  return (
    <>
      <h1>検索結果: {props.location.state.name}</h1>
      <ul>{lists}</ul>
    </>
  );
};

export default ResultsTeam;
