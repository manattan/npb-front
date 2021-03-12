import React from "react";
import { Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <div style={{ textAlign: "center", width: "100%", margin: "20px auto", bottom: '0', position: 'absolute' }}>
      <Text>
        2021 All rights reserved.{" "}
        <a href="https://blog.manattan.me" target="__blank">
          @manattan
        </a>
      </Text>
    </div>
  );
};

export default Footer;
