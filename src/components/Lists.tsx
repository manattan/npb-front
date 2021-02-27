import React from "react";
import { Button } from "@chakra-ui/react";
import * as types from "../types/main";
import { Li } from "../components/StyledComponent/index";
import { getTeam } from "../lib/main";

interface Props {
  lists: types.Data[];
}

const Lists: React.FC<Props> = (props: Props) => {
  const renderList: Array<JSX.Element> = [];
  for (const tmp of props.lists) {
    renderList.push(
      <Li key={tmp.id}>
        <Button style={{ float: "right" }}>編集する</Button>
        <p>{getTeam(tmp.teamname)}</p>
        <p>背番号: {tmp.num}</p>
        <p>{tmp.history}</p>
      </Li>
    );
  }
  return <ul>{renderList}</ul>;
};

export default Lists;
