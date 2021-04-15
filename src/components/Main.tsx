import React from "react";
import { Link } from "react-router-dom";
import { SimpleGrid, Box } from "@chakra-ui/react";
import SearchButton from "./Button";
import SearchKeyword from "./Keyword/Search";
import {
  KeywordContainer,
  TopContainer,
  DescriptionContainer,
  SearchContainer,
} from "./StyledComponent/index";
import TopButtonPC from "./Button/Top/pc";
import TopButtonSP from "./Button/Top/sp";

interface Props {
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setText: React.Dispatch<React.SetStateAction<undefined | string>>;
}

const Main: React.FC<Props> = (props: Props) => {
  return (
    <TopContainer>
      <DescriptionContainer>
        <p>
          ここでは、全球団の背番号の歴史を調べることができます。
          <br />
          また、Google
          でログインすることで、編集をリクエストすることが可能になります！
        </p>
      </DescriptionContainer>
      <SearchContainer>
        <SimpleGrid columns={2} spacing={0}>
          <Link to="/search/team">
            <Box>
              <TopButtonPC label='チーム名' />
            </Box>
          </Link>
          <Link to="/search/number">
            <Box>
              <TopButtonPC label='背番号' />
            </Box>
          </Link>
        </SimpleGrid>
        <Link to="/search/team">
          <TopButtonSP label='チーム名'/>
        </Link>
        <Link to="/searchnumber">
          <TopButtonSP label='背番号'/>
        </Link>
      </SearchContainer>
      <KeywordContainer>
        <SearchKeyword setLoading={props.setLoading} setText={props.setText} />
      </KeywordContainer>
    </TopContainer>
  );
};

export default Main;
