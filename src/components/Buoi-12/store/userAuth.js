
import { defineStore } from "pinia";
import { ref } from "vue";

export  const userAuth = defineStore("auth",()=>{
    const isLoggedIn = ref(true);
   const role = ref("");

   return{isLoggedIn, role}
})
   