import styled from "styled-components";

export const AppContainer = styled.div`
  position: relative;
`;

export const MainContainer = styled.div<{ isLoading: boolean }>`
  filter: ${(props) => (props.isLoading ? "blur(3px)" : 0)};
  padding: 30px;
  min-height: calc(100vh - 60px);
  position: relative;
`;

export const KeywordContainer = styled.div`
  width: 50%;
  margin: 20px auto;
  padding: 20px;
  border: 3px solid #c7c7c7;
  border-radius: 10px;
`;

export const Li = styled.li`
  list-style: none;
  margin: 30px auto;
  padding: 20px;
  border: 3px solid #f5f5f5;
  border-radius: 15px;
`;

export const Div = styled.div`
  width: 98%;
  margin: 20px auto;
  border-bottom: 2px solid #c7c7c7;
`;

export const LoadingContainer = styled.div`
  position: fixed;
  top: calc(50vh - 100px);
  left: calc(50% - 50px);
`;

export const LoadingText = styled.div<{ length: number }>`
  position: fixed;
  width: ${(props) => props.length}rem;
  top: 50vh;
  left: calc(50% - ${(props) => (props.length ? props.length / 2 : 0)}rem);
  text-align: center;
`;
