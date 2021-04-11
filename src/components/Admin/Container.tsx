import React, { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import ListElement from "./List";
import { getRequest } from "../../API/main";
import { RequestState } from "../../store/main";
import { Table, Tbody, Thead, Tr, Td, Heading } from "@chakra-ui/react";

const AdminContainer: React.FC = () => {
  const [request, setRequest] = useRecoilState(RequestState);
  const [loading, setLoading] = useState(true);
  const [list, setList] = useState<Array<JSX.Element>>();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getRequest();
      if (result.ok) {
        const tmp = (await result.json()).data;
        setRequest(tmp);
      }
    };
    fetchData();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    console.log(request);
    if (request) {
      const renderList = [];
      for (const tmp of request) {
        renderList.push(<ListElement data={tmp} />);
      }
      setList(renderList);
      setLoading(false);
    }
  }, [request]);

  if (loading) {
    <div />;
  }

  return (
    <>
      <Heading>管理画面</Heading>
      <Table variant="striped" colorScheme="twitter">
        <Thead>
          <Tr>
            <Td>詳細</Td>
            <Td>変更前</Td>
            <Td>変更後</Td>
            <Td>オプション</Td>
          </Tr>
        </Thead>
        <Tbody>{list}</Tbody>
      </Table>
    </>
  );
};

export default AdminContainer;
