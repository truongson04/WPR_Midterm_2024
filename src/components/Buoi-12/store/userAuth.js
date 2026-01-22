
import { defineStore } from "pinia";
import { ref } from "vue";

export  const userAuth = defineStore("auth",()=>{
    const isLoggedIn = ref(false);
   const role = ref("");
   const login = ()=>{
    isLoggedIn.value=true
   }
   const changeRole= (role)=>{
    role.value= role
   }

   return{isLoggedIn, role, login, changeRole}
})
   