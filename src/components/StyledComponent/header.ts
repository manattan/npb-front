import styled from "styled-components";
import { sp, pc } from "./meta";

export const HeaderContainer = styled.div`
  height: 60px;
  width: 100vw;
  background-color: #ffbb33;
  position: sticky;
  top: 0px;
  z-index: 10;
  justify-content: space-around;
  display: flex;
`;

export const LeftContainer = styled.div`
  display: flex;
  margin: 6px 0;
`;

export const LeftObj = styled.div`
  display: flex;
  h1 {
    font-weight: bold;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    user-select: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  ${sp`
    display: none;
  `}
`;

export const RightObj = styled.div`
  display: flex;
  margin: 0 10px;
  p {
    margin: 18px;
  }
`;

export const HamburgerContainer = styled.div`
  margin-top: 10px;
  ${pc`
    display: none;
  `}
`;
