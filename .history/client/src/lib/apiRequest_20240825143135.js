import axios from "axios";


const apiRequest = axios.create({
  baseURL: `${import.meta.env.}`,
  withCredentials: true,
});

export default apiRequest;