import axios from "axios";

const apiRequest = axios.create({
  baseURL: process.env.,
  withCredentials: true,
});

export default apiRequest;