import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_BASEURL

/*
 Axios Interceptor to log user out
*/

axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
        if (error?.response?.status === 401) {
              console.log(error)
        }
        return Promise.reject(error);
    }
  );

export default axios
