import React from "react";
import styled from "styled-components";

const ButtonContainer = styled.div`
  height: 100%;
  width: 80%;
  padding: 10px 0;
  margin: auto;
  font-size: 150%;
  background-color: #f5f5f5;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 0 3px #dcdcdc;
  &:active {
    box-shadow: none;
    position: relative;
    top: 3px;
  }
`;

type Props = {
  label: string;
  function?:(() => void )
 };

const SearchButton: React.FC<Props> = (props: Props) => {
  return (
    <>
      <ButtonContainer onClick={props.function}>
        <p><span style={{userSelect: 'none'}}>{props.label}</span></p>
      </ButtonContainer>
    </>
  );
};

export default SearchButton;
