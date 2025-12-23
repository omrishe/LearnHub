import axios from "axios";

const serverUrl = "https://127.0.0.1:8000/api";

export function createApi(baseURL: string) {
  return axios.create({
    baseURL: `${serverUrl}${baseURL}`,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
