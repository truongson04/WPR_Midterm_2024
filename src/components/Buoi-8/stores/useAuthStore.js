import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const authStore = defineStore("auth", ()=>{
    const isLoggedIn= ref(false);
    const userName = ref("");
    const login= (name)=>{
        isLoggedIn.value=true;
        userName.value= name;
        
    }
    const logout = ()=>{
        isLoggedIn.value=false;
        userName.value=""
    }
    const displayName = computed(()=>{
        if(isLoggedIn.value){
             return `Hello ${userName.value}`
        }
        else{
            return "Guest"
        }
       
    })
    return{ login, logout, displayName}
})