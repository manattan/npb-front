import React, { useEffect, useState } from "react";
import { getListsByTeam } from "../API/main";
import styled from "styled-components";
import { list } from "../lib/main";

const Li = styled.li`
  list-style: none;
  margin: 20px;
`;

const searchName = (query: string | undefined) => {
  console.log(query)
  for (const tmp of list) {
    if (tmp.team === query) {
      return tmp.name;
    }
  }
};

const Results: React.FC = () => {
  const [data, setData] = useState<
    Array<JSX.Element> | "少しお待ちください..."
  >("少しお待ちください...");
  const [team, setTeam] = useState<string | undefined>(undefined);
  const query: string = window.location.search;

  useEffect(() => {
    const get = async () => {
      const result = (await getListsByTeam(query)).data;

      const renderList = [];
      for (let i = 0; i < result.length; i++) {
        renderList.push(
          <Li key={i}>
            <p>背番号: {result[i].num}</p>
            <p>{result[i].history}</p>
          </Li>
        );
      }
      setData(renderList);
    };
    get();
    setTeam(searchName(query.slice(6, query.length)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h1>検索結果</h1>
      <p>{team}</p>
      <ul>{data}</ul>
    </>
  );
};

export default Results;
