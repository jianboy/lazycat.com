import VueRouter from 'vue-router'

import ChatHome from '../pages/ChatHome'
import Home from '../pages/Home'
import Video from '../pages/Video'
import MobileChat from '../pages/MobileChat'
import Setting from '../pages/Setting'
import Lingting from '../pages/Lingting.vue'

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
                }, {
                    path: "/Lingting",
                    name: "Lingting",
                    componet: Lingting
                }, {
                    path: "/Setting",
                    name: "Setting",
                    componet: Setting
                },

            ]
        }, {
            path: "/MobileChat",
            name: "MobileChat",
            componet: MobileChat
        }
    ]
})