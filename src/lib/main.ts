export const list: { team: string; name: string }[] = [
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

export const getTeam = (team: string) => {
  for (const tmp of list) {
    if (tmp.team === team) {
      return tmp.name;
    }
  }
};
