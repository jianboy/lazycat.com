import base from ".";

let axios = base.axios;
let baseUrl = base.baseUrl;

// 获取好友
export const getFriend = params => {
    return axios({
        method: 'post',
        baseURL: `${baseUrl}/friend/friendList`,
        data: params
    }).then(res => res.data);
}

// 获取聊天信息
export const getChatMsg = params => {
    return axios({
        baseURL: `${baseUrl}/friend/chatMsg`,
        data: params,
        method: 'post'
    }).then(res => res.data);
}

export const chatgpt = params => {
    return axios({
        method: 'post',
        url: `https://api.openai.com/v1/completions`,
        data: params,
        headers: {
            'Content-Type': 'application/json',
            'Authorizaton': `Bearer ${process.env.vue}`
        }
    }).then(res => res.data);
}