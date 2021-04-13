import React from "react";
import { Text } from "@chakra-ui/react";
import {FooterContainer} from './StyledComponent/index'

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Text>
        2021 All rights reserved.{" "}
        <a href="https://manattan.me" target="__blank">
          @manattan
        </a>
      </Text>
    </FooterContainer>
  );
};

export default Footer;
