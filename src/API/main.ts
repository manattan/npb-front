const BaseURL = "http://localhost:8000/api";

export const getListsByTeam = async (team: string) => {
  const results = await fetch(`${BaseURL}/team?team=${team}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return results.json();
};

export const getListsByKey = async (data: { name: string }) => {
  const result = await fetch(`${BaseURL}/keyword?keyword=${data.name}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return result.json();
};
