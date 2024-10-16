import axios from "axios";


const apiRequest = axios.create({
  // baseURL: "http://localhost:8888/api",
  baseURL: "  baseURL: "http://localhost:8888/api",
/api",

  withCredentials: true,
});

export default apiRequest;