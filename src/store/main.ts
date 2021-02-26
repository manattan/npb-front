import { atom } from "recoil";
import * as types from "../types/main";

export const user = atom<types.User>({
  key: "user",
  default: {
    uid: "",
    name: "",
    email: "",
  },
});
