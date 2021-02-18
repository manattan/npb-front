import React from "react";
import { Link } from "react-router-dom";
import { SimpleGrid, Box } from "@chakra-ui/react";
import SearchButton from "./Button";
import SearchKeyword from "./Keyword/Search";
import { KeywordContainer } from "./StyledComponent/index";

const Main: React.FC = () => {
  return (
    <>
      <SimpleGrid columns={2} spacing={0}>
        <Link to="/search/team">
          <Box style={{ textAlign: "center" }}>
            <SearchButton label="チーム名から検索する" />
          </Box>
        </Link>
        <Link to="/search/number">
          <Box style={{ textAlign: "center" }}>
            <SearchButton label="背番号から検索する" />
          </Box>
        </Link>
      </SimpleGrid>
      <KeywordContainer>
        <SearchKeyword />
      </KeywordContainer>
    </>
  );
};

export default Main;
