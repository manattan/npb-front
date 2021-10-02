import * as Types from '../types/main'

export const list: { team: string; name: string, league: Types.league }[] = [
  { team: "F", name: "北海道日本ハムファイターズ", league: "パ・リーグ” },
  { team: "H", name: "福岡ソフトバンクホークス", league: "パ・リーグ” },
  { team: "L", name: "埼玉西武ライオンズ" , league: "パ・リーグ”},
  { team: "M", name: "千葉ロッテマリーンズ" , league: "パ・リーグ”},
  { team: "Bs", name: "オリックスバッファローズ" , league: "パ・リーグ”},
  { team: "E", name: "東北楽天ゴールデンイーグルス", league: "パ・リーグ” },
  { team: "G", name: "読売ジャイアンツ", league: "セ・リーグ" },
  { team: "C", name: "広島東洋カープ", league: "セ・リーグ" },
  { team: "T", name: "阪神タイガース" , league: "セ・リーグ"},
  { team: "De", name: "横浜DeNAベイスターズ" , league: "セ・リーグ"},
  { team: "D", name: "中日ドラゴンズ", league: "セ・リーグ" },
  { team: "S", name: "東京ヤクルトスワローズ", league: "セ・リーグ" },
];

export const getTeam = (team: string) => {
  for (const tmp of list) {
    if (tmp.team === team) {
      return tmp.name;
    }
  }
};
