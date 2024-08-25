import axios from "axios";
import 'dotenv/config';

const apiRequest = axios.create({
  baseURL: "process.env.API_BASE_URL",
  withCredentials: true,
});

export default apiRequest;