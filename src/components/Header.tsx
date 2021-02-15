import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <>
      <Link to="/">トップに戻る</Link>
      <h1>Search-NPB</h1>
      <p>NPBの背番号の歴史を調べることができるサイトです</p>
    </>
  );
};

export default Header;
