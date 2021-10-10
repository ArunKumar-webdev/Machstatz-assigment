import axios from "axios";

const instance = axios.create({
    baseURL:"http://3.6.93.159:7883/machstatz/"
});
export default instance;