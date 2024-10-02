import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";
import { getItem, removeItem } from "../common/storage.services";

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

console.log('Base URL:', baseURL); // Check base URL

const http = axios.create({
  baseURL,
});
           
console.log("Axios instance created:", http);

interface ApiResponse<T> {
  data: T; 
}

const onSuccess = <T>(response: AxiosResponse<ApiResponse<T>>): T => {
  return response.data.data;
};

const onError = (err: AxiosError): Promise<never> => {
  console.error('Axios error response:', err.response); 
  if (err.response?.status === 401) {
    removeItem("token");
    window.location.pathname = "/Login"; 
  }
  return Promise.reject(err);
};


http.interceptors.request.use(
  config => {
    const token = localStorage.getItem('token');
    console.log('Token found:', token); 
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);


http.interceptors.response.use(onSuccess, onError);

export default http;


