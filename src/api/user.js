import base from './index'

let axios = base.axios
let baseUrl = base.baseUrl

// 登录
export const login = params => {
    return axios({
        baseURL: `${baseUrl}/user/login`,
        method: 'post',
        data: params
    }).then(res => res.data)
}

export const getUserInfo = params => {
    return axios({
        method: "get",
        baseURL: `${baseUrl / user / userinfo}`,
        data: params
    }).then(res => res.data);
}

// 登出
export const logout = params => {
    return axios({
        method: 'get',
        baseURL: `${baseUrl}/user/logout`,
        data: params
    }).then(res => res.data)
}