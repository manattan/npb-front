import React from "react";
import * as Types from "../../types/main";
import { Tr, Td, Button } from "@chakra-ui/react";
import { mergeRequest, rejectRequest } from "../../API/main";

interface Props {
  data: Types.RequestDetail;
}

const ListElement: React.FC<Props> = (props: Props) => {
  const merge = async () => {
    // eslint-disable-next-line
    if (confirm("本当ににmergeしますか?")) {
      const result = await mergeRequest({ id: props.data.id });
      if (result.ok) {
        alert("正常にmergeされました");
      }
    }
  };

  const reject = async () => {
    // eslint-disable-next-line
    if (confirm("本当にrejectしますか?")) {
      const result = await rejectRequest({ id: props.data.id });
      if (result.ok) {
        alert("正常にrejectされました");
      }
    }
  };

  return (
    <Tr>
      <Td>
        <p>
          データID: {props.data.dataid}
          <br /> ユーザーID: {props.data.uid}
        </p>
      </Td>
      <Td>{props.data.prevent}</Td>
      <Td>{props.data.new}</Td>
      <Td>
        <section style={{ textAlign: "center" }}>
          <div style={{ margin: "5px 0" }}>
            <Button
              colorScheme="orange"
              borderColor="orange.700"
              onClick={merge}
            >
              マージ
            </Button>
          </div>
          <div style={{ margin: "5px 0" }}>
            <Button onClick={reject}>却下</Button>
          </div>
        </section>
      </Td>
    </Tr>
  );
};

export default ListElement;
