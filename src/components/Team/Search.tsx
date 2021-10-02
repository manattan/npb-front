import React from "react";
import { useHistory } from "react-router-dom";
import { Heading } from "@chakra-ui/react";
import { list } from "../../lib/main";
import { getListsByTeam } from "../../API/main";
import SearchButton from "../Button/Team/main";

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setText: React.Dispatch<React.SetStateAction<undefined | string>>;
}

const SearchTeam: React.FC<Props> = (props: Props) => {
  const pacificList: JSX.Element[] = [];
  const centralList: JSX.Element[] = [];
  const history = useHistory();

  const fetch = async (i: number) => {
    props.setText(`チーム: ${list[i].name}`);
    props.setLoading(true);
    const results = await getListsByTeam(list[i].team);
    history.push({
      pathname: "/results/team",
      state: { results, name: list[i].name },
    });
    props.setLoading(false);
  };

  for (let i = 0; i < list.length; i++) {
    const element:JSX.Element = (
      <SearchButton
        label={list[i].name}
        function={async () => await fetch(i)}
      />
    ) 

    if (list[i].league === 'パ・リーグ') {
      pacificList.push(element)
    } else {
      centralList.push(element)
    }
  }

  return (
    <>
      <div style={{ margin: "40px auto", textAlign: "center" }}>
        <Heading size="md">チーム名から検索する</Heading>
      </div>
      <LeagueContainer league='パ・リーグ' list={pacificList} />
      <LeagueContainer league='セ・リーグ' list={centralList} />
    </>
  );
};

export default SearchTeam;
