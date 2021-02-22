import React from "react";
import { useHistory } from "react-router-dom";
import { SimpleGrid, Box } from "@chakra-ui/react";
import { list } from "../../lib/main";
import { getListsByTeam } from "../../API/main";
import SearchButton from "../Button";

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
      <Box style={{ textAlign: "center" }} key={i}>
        <SearchButton label={list[i].name} function={async ()=> await fetch(i)} />
      </Box>
    );
  }

  return (
    <>
      <p>チーム名から検索する</p>
      <SimpleGrid columns={2} spacing={6}>
        {renderList}
      </SimpleGrid>
    </>
  );
};

export default SearchTeam;
