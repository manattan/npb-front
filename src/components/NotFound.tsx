import React from "react";
import { Heading, Text } from "@chakra-ui/react";

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
