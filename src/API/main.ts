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
