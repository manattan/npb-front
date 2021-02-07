import React, { useEffect, useState } from "react";
import { getListsByTeam } from "../API/main";

const Results: React.FC = () => {
  const [data, setData] = useState("少しお待ちください...");
  const query: string = window.location.search;
  useEffect(() => {
    const get = async () => {
      const result = await getListsByTeam(query);
      console.log(result)
      setData(result);
    };
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <h1>検索結果</h1>
    </>
  );
};

export default Results;
