import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { list } from "../lib/main";

const Li = styled.li`
  list-style: none;
`;

const Team: React.FC = () => {
  const renderList: JSX.Element[] = [];

  for (let i = 0; i < list.length; i++) {
    const url = `/results/?team=${list[i].team}`;
    renderList.push(
      <Li key={list[i].team}>
        <Link to={url}>{list[i].name}</Link>
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

export default Team;
