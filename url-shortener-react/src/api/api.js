// src/api/api.js
import axios from "axios";

const api = axios.create({
  baseURL: "https://shortly-sb.onrender.com",
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  console.log("INTERCEPTOR TOKEN:", localStorage.getItem("token"));
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


export default api;
