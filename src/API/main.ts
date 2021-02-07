import Axios from "axios";

const BaseURL = "http://localhost:8000/api";

export const getAllLists = async () => {
  const result = await Axios.get(BaseURL);
  return result.data;
};
