export interface Data {
  history: string;
  teamname: string;
  num: string;
  id: string;
}

export interface User {
  uid: string | undefined;
  name: string | null | undefined;
  email: string | null | undefined;
}

export interface Admin {
  id: string | undefined;
}

export interface requestData {
  id: string;
  prevent: string;
  new: string;
}

export interface requestDetail {
  id: string
  uid: string
  dataid: string
  prevent: string
  new: string
  merged: boolean
}
