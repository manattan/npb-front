import React from "react";
import { useHistory } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import * as types from "../types/main";
import { Li } from "../components/StyledComponent/index";
import { getTeam } from "../lib/main";
import { userState } from "../store/main";

interface Props {
  lists: types.Data[];
}

const Lists: React.FC<Props> = (props: Props) => {
  const user = useRecoilValue(userState);
  const history = useHistory();

  const edit = (tmp: types.Data) => {
    history.push({
      pathname: "/edit",
      state: { data: tmp },
    });
  };

  const renderList: Array<JSX.Element> = [];
  for (const tmp of props.lists) {
    renderList.push(
      <Li key={tmp.id}>
        {user && (
          <Button style={{ float: "right" }} onClick={() => edit(tmp)}>
            編集する
          </Button>
        )}
        <p>{getTeam(tmp.teamname)}</p>
        <p>背番号: {tmp.num}</p>
        <p>{tmp.history}</p>
      </Li>
    );
  }
  return <ul>{renderList}</ul>;
};

export default Lists;
