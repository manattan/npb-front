import React from "react";
import Header from "./Header";
import { Heading, Text } from "@chakra-ui/react";
import { Div } from "./StyledComponent";

const NotFound: React.FC = () => {
  return (
    <div>
      <span style={{ textAlign: "center" }}>
        <Heading>404 not Found</Heading>
        <Text>このURLは存在しません！</Text>
      </span>
    </div>
  );
};

export default NotFound;
