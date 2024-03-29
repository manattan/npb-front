import React from "react";
import { useHistory } from "react-router-dom";
import { SimpleGrid, Box, Heading } from "@chakra-ui/react";
import SearchButton from "../Button";
import { getListsByNum } from "../../API/main";

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setText: React.Dispatch<React.SetStateAction<undefined | string>>;
}

const SearchNumber: React.FC<Props> = (props: Props) => {
  const history = useHistory();

  const fetch = async (i: number) => {
    props.setText(`背番号: ${i}`);
    props.setLoading(true);
    const results = await getListsByNum(i);
    history.push({
      pathname: "/results/number",
      state: { results, number: i },
    });
    props.setText(undefined);
    props.setLoading(false);
  };

  const list = [];
  for (let i = 0; i < 100; i++) {
    list.push(
      <Box style={{ textAlign: "center" }} key={i + 1}>
        <SearchButton
          label={(i + 1).toString()}
          function={async () => await fetch(i + 1)}
        />
      </Box>
    );
  }

  return (
    <>
      <div style={{ margin: "40px auto", textAlign: "center" }}>
        <Heading size="md">番号から検索する</Heading>
      </div>
      <div style={{ marginBottom: "30px" }}>
        <SimpleGrid columns={10} spacing={4}>
          {list}
        </SimpleGrid>
      </div>
    </>
  );
};

export default SearchNumber;
