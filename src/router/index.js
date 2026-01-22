import Users from "../components/Buoi-12/Users.vue"
import Login from "../components/Buoi-12/Login.vue"
import { createRouter, createWebHashHistory, createWebHistory } from "vue-router"
import { userAuth } from "../components/Buoi-12/store/userAuth"
import Admin from "../components/Buoi-12/Admin.vue"
const ROLES = {
    ADMIN:"admin",
    USER: "user"
}
const routes =[
    {
        path:"/",
        component:Users,
        meta:{
            requireLoggedIn:true
        }
    },
    {
        path:"/login",
        name:'Login',
        component:Login
    }
    ,
    {
        path:"/client",
        name:"Users",
        component:Users,
        meta:{
            requireLoggedIn: true
        }
    },
    {
        path:"/adPage",
        name:"Admin", 
        component:Admin,
        meta:{
            requireLoggedIn:true
        },
        beforeEnter:(to, from)=>{
            const authStore = userAuth()
            if(authStore.role!==ROLES.ADMIN){
                window.confirm("access denied")
            return{
                path:"/client"
            }
        }
        }
    }
]
    const router = createRouter({
    history: createWebHistory(),
    routes
    })
router.beforeEach((to , from)=>{
    const authStore = userAuth()
    if(to.meta.requireLoggedIn && !authStore.isLoggedIn){
        return {
            path:"/login"
        }
    }
  
   
  
})
export default router