import React, { useCallback } from "react";
import { Link } from "react-router-dom";

const Main: React.FC = () => {
  const submit = useCallback((values) =>{
    alert(values)
    // getListsByKey(values)
  }, []) 
  return (
    <>
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
