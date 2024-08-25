import axios from "axios";
im

const apiRequest = axios.create({
  baseURL: "process.env.API_BASE_URL",
  withCredentials: true,
});

export default apiRequest;