import { atom } from "recoil";
import * as types from "../types/main";

export const userState = atom<types.User | null>({
  key: "user",
  default: null,
});

export const admin = atom<types.Admin | null>({
  key: "admin",
  default: null,
});

export const RequestState = atom<types.RequestDetail[] | null>({
  key: "request",
  default: null,
});
