import axios from "axios";


const apiRequest = axios.create({
  baseURL: `${import}`,
  withCredentials: true,
});

export default apiRequest;