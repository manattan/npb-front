import Axios from "axios";

const BaseURL = "http://localhost:8000/api";

export const getListsByTeam = async (team: string) => {
  const result = await Axios.get(`${BaseURL}/team${team}`);
  return result.data;
};

export const getListsByKey = async (data: { name: string }) => {
  const result = await fetch(`${BaseURL}/keyword?keyword=${data.name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(result.ok);
  return result.json();
};
