import axios from "axios";
import 'dotenv/config';

const apiRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

export default apiRequest;