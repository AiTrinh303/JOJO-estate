import axios from "axios";

const apiRequest = axios.create({
  baseURL: process,
  withCredentials: true,
});

export default apiRequest;