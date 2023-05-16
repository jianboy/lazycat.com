import VueRouter from 'vue-router'

import ChatHome from '../pages/ChatHome'
import Home from '../pages/Home'
import Video from '../pages/Video'
import MobileChat from '../pages/MobileChat'

export default new VueRouter({
    routes: [
        {
            path: '/',
            redirect: "/ChatHome",
            componet: Home,
            children: [
                {
                    path: "/ChatHome",
                    name: "ChatHome",
                    componet: ChatHome
                }, {
                    path: "/Video",
                    name: "Video",
                    componet: Video
                }
            ]
        }, {
            path: "/MobileChat",
            name: "MobileChat",
            componet: MobileChat
        }
    ]
})