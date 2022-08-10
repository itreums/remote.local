import Main from "../pages/Main.js"
import Auth from "../pages/Auth.js"
import Page404 from "../pages/Page404.js"
import Profile from "../pages/Profile.js"
import Shop from "../pages/Shop.js"
import Setting from "../pages/Setting.js"
import Welcome from "../pages/Welcome.js"
import store from "../store/store.js"


import Youtube from "../apps/youtube/Youtube.js"
import YandexMusic from "../apps/yandexMusic/YandexMusic.js"
import TikTok from "../apps/tiktok/TikTok.js"

const {createRouter, createWebHistory, createWebHashHistory}=VueRouter
const routes=[
    {
        path:"/",
        component:Main,
        name:"main"
    },
    {
        path:"/auth",
        component:Auth,
        name:"auth",
        beforeEnter: (to, from) => {
            if(store.state.appData){
                return {name:"main"}
            }
        }
    },
    {
        path:'/:pathMatch(.*)',
        component:Page404
    },
    {
        path:'/profile',
        component:Profile
    },
    {
        path:'/setting',
        component:Setting
    },
    {
        path:'/shop',
        component:Shop
    },
    {
        path:'/youtube2',
        component:Youtube,
        name:"youtube",
        props: true
    },
    {
        path:'/welcome',
        component:Welcome,
        name:"welcome"
    },
    {
        path:'/yandexmusic',
        component:YandexMusic,
        name:"yandexmusic"
    },
    {
        path:'/tiktok',
        component:TikTok,
        name:"tiktok"
    }


]
const router=createRouter({
    history:createWebHistory(),
    routes
})
router.beforeEach((to, from) => {
    if(!store.state.appData && to.name !== 'auth'){
        
        return {name:"auth"}
    }
    
    // else if(!store.state.extWindow && to.name !== 'main'){
    //     return {name:"main"}
    // }
})

export default router