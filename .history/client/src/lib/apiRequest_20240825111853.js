import axios from "axios";

const apiRequest = axios.create({
  baseURL: "pr",
  withCredentials: true,
});

export default apiRequest;