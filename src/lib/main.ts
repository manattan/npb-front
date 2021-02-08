// import * as types from "../types/main";

// export const sortDataByNum = (data: Array<types.Data>): Array<types.Data> => {
//   if (data.length === 1) {
//     return data;
//   }

//   let left = data.slice(0, data.length / 2);
//   let right = data.slice(data.length / 2, data.length - 1);
//   left = sortDataByNum(left);
//   right = sortDataByNum(right);

//   let result: Array<types.Data> = [];

//   while (left.length > 0 && right.length > 0) {
//     if (left[0].num >= right[0].num) {
//       result.push(left[0]);
//       left = left.slice(1, data.length - 1);
//     } else {
//       result.push(right[0]);
//       right = right.slice(1, data.length - 1);
//     }
//   }

//   if (left.length === 0) {
//     result = result.concat(right);
//   } else if (right.length === 0) {
//     result = result.concat(left);
//   }

//   return result;
// };

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
