import UserList from "../components/Buoi-11/UserList.vue"
import UserDetails from "../components/Buoi-11/UserDetails.vue"
import { createRouter, createWebHistory } from "vue-router"

const routes=[
    {
        path:"/",
        name:"UserList",
        component:UserList,
      
        

    },
    {
        path:"/user/:id",
        name:"User",
        component:UserDetails
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes
})
export default router