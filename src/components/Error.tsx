import React from "react";
import styled from "styled-components";

type Props = {
  message?: string;
};

const P = styled.p`
    color: red;
    font-weight: bold;
`;

const Error: React.FC<Props> = (props: Props) => {
  return (
      <div style={{padding:'5px 0'}}>
          <P>{props.message}</P>
      </div>
  );
};

export default Error;
