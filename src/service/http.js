import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5001/api",
});

export default http;
