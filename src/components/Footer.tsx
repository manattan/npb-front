import React from "react";
import { Text } from "@chakra-ui/react";

const Footer: React.FC = () => {
  return (
    <div style={{ textAlign: "center", margin: "30px auto 10px", bottom: '0', position: 'absolute', width: 'calc(100% - 40px)' }}>
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
