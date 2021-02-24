import React from "react";
import { Link } from "react-router-dom";
import {Heading, Text, GridItem, Grid, Button} from '@chakra-ui/react'

const Header: React.FC = () => {
  return (
    <>
      <Grid templateColumns="repeat(6, 1fr)">
        <GridItem colSpan={5}>
          <Link to="/"><Heading>Search-NPB</Heading></Link>
          <Text>NPBの背番号の歴史を調べることができるサイトです</Text>
        </GridItem>
        <GridItem colSpan={1} style={{textAlign: 'right'}}>
          <Button>ログイン</Button>
        </GridItem>
      </Grid>
    </>
  );
};

export default Header;
