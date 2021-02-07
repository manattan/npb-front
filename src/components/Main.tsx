import React from "react";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  return (
    <>
      <h1>Search-NPB</h1>
      <p>NPBの背番号の歴史を調べることができるサイトです</p>
      <Link to="/team">
        <button>チームから検索する</button>
      </Link>
      <Link to="/number">
        <button>番号から検索する</button>
      </Link>
    </>
  );
};

export default Main;
