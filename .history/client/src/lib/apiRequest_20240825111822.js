import axios from "axios";
import 'dotenv/config';

const apiRequest = axios.create({
  baseURL:,
  withCredentials: true,
});

export default apiRequest;