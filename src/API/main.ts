import Axios from "axios";

const BaseURL = "http://localhost:8000/api";

export const getAllLists = async () => {
  const result = await Axios.get(`${BaseURL}/all`);
  return result.data;
};

export const getListsByTeam = async (team: string) => {
  const result = await Axios.get(`${BaseURL}/team/${team}`);
  return result.data;
};
