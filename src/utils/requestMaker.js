import { BASE_URL } from "../constants";

const requestMaker = async ({
  apiURL = BASE_URL,
  method = "GET",
  body = {},
  route = "",
  headers = {
    "Content-Type": "application/json"
  }
}) => {
  const response = await fetch(`${apiURL}${route}`, {
    method,
    body: Object.keys(body).lenght ? JSON.stringify(body) : null,
    headers
  });

  return await response.json();
};

export default requestMaker;
