import axios from "axios";
import 'do'

const apiRequest = axios.create({
  baseURL: process.env.API_BASE_URL,
  withCredentials: true,
});

export default apiRequest;