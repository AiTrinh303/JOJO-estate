import axios from "axios";


const apiRequest = axios.create({
  // baseURL: "http://localhost:8888/api",
  baseURL: "http://localhost:8888/api",

  withCredentials: true,
});

export default apiRequest;