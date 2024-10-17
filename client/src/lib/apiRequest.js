import axios from "axios";


const apiRequest = axios.create({
  baseURL: "http://localhost:8888/api",

  // baseURL: "https://jojo-estate-api.onrender.com" ,
  withCredentials: true,
});

export default apiRequest;