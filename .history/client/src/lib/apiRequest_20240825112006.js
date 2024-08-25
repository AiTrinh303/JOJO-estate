import axios from "axios";
import ''import { dot } from "node:test/reporters";
dot

const apiRequest = axios.create({
  baseURL: "process.env.API_BASE_URL",
  withCredentials: true,
});

export default apiRequest;