import * as types from "../types/main";
const BaseURL = "http://localhost:2000/api";

export const getListsByTeam = async (team: string) => {
  const results = await fetch(`${BaseURL}/team?team=${team}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return results.json();
};

export const getListsByNum = async (i: number) => {
  const results = await fetch(`${BaseURL}/num?num=${i}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return results.json();
};

export const getListsByKey = async (data: string | undefined) => {
  const results = await fetch(`${BaseURL}/keyword?keyword=${data}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return results.json();
};

export const registerUser = async (data: any) => {
  const results = await fetch(`${BaseURL}/register/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return results;
};

export const requestEdit = async (
  data: types.RequestData,
  user: types.User
) => {
  const results = await fetch(`${BaseURL}/editrequest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.assign(data, { uid: user.uid })),
  });

  return results;
};

export const getRequest = async () => {
  const results = await fetch(`${BaseURL}/getRequest`, {
    method:"GET",
    headers: {
      "Content-Type": "application/json"
    }
  })

  return results
}

export const mergeRequest = async (id: {id: string}) => {
  console.log("id: ", id )
  const results = await fetch(`${BaseURL}/mergeRequest`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({id: id.id}),
  })

  console.log(results)
  return results
}