import Home from "../components/Buổi-7/Home.vue";
import About from "../components/Buổi-7/About.vue";
import { createRouter, createWebHistory } from "vue-router";
import Details from "../components/Buổi-7/Details.vue";

import Search from "../components/Buổi-7/Search.vue";
import NotFound from "../components/Buổi-7/NotFound.vue";
import MiniHome from "../components/Buổi-7/MiniHome.vue";


const routes =[
    {
        path:"/",
        name:'Home',
        component:Home,
        children:[
            {
                path:"child",
                name:"MiniHome",
                component:MiniHome
            }
        ]
    },
    {
        path:"/about",
        name:'About',
        component:About
    }, {
        path:"/details/:id",
        name:"Details",
        component:Details
    },
    {
        path:"/search",
        name:"Search",
        component:Search
    }, {
        path:'/:pathMatch(.*)*',
        name:"NotFound",
        component:NotFound
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router