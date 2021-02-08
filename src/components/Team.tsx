import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Li = styled.li`
  list-style: none;
`;

const Team: React.FC = () => {
  const list: { team: string; name: string }[] = [
    { team: "F", name: "北海道日本ハムファイターズ" },
    { team: "H", name: "福岡ソフトバンクホークス" },
    { team: "L", name: "埼玉西武ライオンズ" },
    { team: "M", name: "千葉ロッテマリーンズ" },
    { team: "Bs", name: "オリックスバッファローズ" },
    { team: "E", name: "東北楽天ゴールデンイーグルス" },
    { team: "G", name: "読売ジャイアンツ" },
    { team: "C", name: "広島東洋カープ" },
    { team: "T", name: "阪神タイガース" },
    { team: "De", name: "横浜DeNAベイスターズ" },
    { team: "D", name: "中日ドラゴンズ" },
    { team: "S", name: "東京ヤクルトスワローズ" },
  ];

  const renderList: JSX.Element[] = [];

  for (let i = 0; i < list.length; i++) {
    const url = `/results/?team=${list[i].team}`;
    renderList.push(
      <Li key={list[i].team}>
        <Link to={url}>{list[i].name}</Link>
      </Li>
    );
  }

  return (
    <>
      <p>チーム名から検索する</p>
      <ul>{renderList}</ul>
    </>
  );
};

export default Team;
