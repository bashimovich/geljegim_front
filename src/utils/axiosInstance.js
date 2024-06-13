import axios from "axios";
// import { token } from "./token";

const BASE_URL = "http://gel.edu.tm:8888/api/";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    //  Authorization: "Bearer " + token(),
    //  Authorization: token(),
    "Content-Type": "application/json",
    Accept: "*/*",
    // Authorization:'Bearer 32|ZOqiasiyOKKmWrQGnI38qSYD0cUWaJ92ICq3PHcU9d18acde'
  },
});
export { BASE_URL, axiosInstance };
