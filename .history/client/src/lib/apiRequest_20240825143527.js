import axios from "axios";


const apiRequest = axios.create({
  baseURL: "mport.meta.ienv.API_BASE_URL",
  withCredentials: true,
});

export default apiRequest;