import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { list } from "../../lib/main";
import { getListsByTeam } from "../../API/main";

const Li = styled.li`
  list-style: none;
`;

const SearchTeam: React.FC = () => {
  const renderList: JSX.Element[] = [];
  const history = useHistory();

  const fetch = async (i: number) => {
    const results = await getListsByTeam(list[i].team);
    console.log(results);
    history.push({
      pathname: "/results/team",
      state: { results, name: list[i].name },
    });
  };

  for (let i = 0; i < list.length; i++) {
    renderList.push(
      <Li key={list[i].team}>
        <Button onClick={async () => await fetch(i)}>{list[i].name}</Button>
      </Li>
    );
  }

  return (
    <>
      <p>チーム名から検索する</p>
      <ul>{renderList}</ul>
    </>
  );
};

export default SearchTeam;
