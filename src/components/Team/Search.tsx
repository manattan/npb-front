import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { Button, SimpleGrid, Box } from "@chakra-ui/react";
import { list } from "../../lib/main";
import { getListsByTeam } from "../../API/main";

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
      <Box style={{ textAlign: "center" }}>
        <Button onClick={async () => await fetch(i)} width={400}>
          {list[i].name}
        </Button>
      </Box>
    );
  }

  return (
    <>
      <p>チーム名から検索する</p>
      <SimpleGrid columns={2} spacing={8} style={{ marginTop: "20px" }}>
        {renderList}
      </SimpleGrid>
    </>
  );
};

export default SearchTeam;
