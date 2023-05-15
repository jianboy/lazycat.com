import axios from "axios";

axios.defaults.timeout = 30000000 // ms
axios.defaults.withCredentials = true

// 请求拦截
axios.interceptors.request.use(
    function (config) {
        return config;
    },
    function (error) {
        console.log("请求异常：" + JSON.stringify(error));
        return Promise.reject(error);
    }
);

axios.interceptors.response.use(
    function (response) {
        return response;
    },
    function (error) {
        console.log("响应出错：" + JSON.stringify(error));
        return Promise.reject(error);
    }
);


const base = {
    axios: axios,
    baseUrl: "http://localhost:5050"
}
export default base