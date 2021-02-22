import React from "react";
import {SimpleGrid, Box} from '@chakra-ui/react'
import SearchButton from "../Button";
import {getListsByNum} from "../../API/main"
import { useHistory } from "react-router-dom";

const SearchNumber: React.FC = () => {
  const history = useHistory()

  const fetch = async (i: number) => {
    const results = await getListsByNum(i)
    console.log(results)
    history.push({
      pathname: "/results/number",
      state: { results, number: i },
    });
  }

  const list = []
  for (let i=0;i<100;i++){
    list.push(
      <Box style={{ textAlign: "center" }} key={i+1}>
        <SearchButton label={(i+1).toString()} function={async () => await fetch(i+1)}/>
      </Box>
    )
  }

  return (
    <>
      <h1>番号で検索する</h1>
      <SimpleGrid columns={10} spacing={4}>{list}</SimpleGrid>
    </>
  );
};

export default SearchNumber;
