
import { defineStore } from "pinia";
import { ref } from "vue";
import { UserStore } from "./UserStore";
import { UIStore } from "./UIstore";

export const useAuthStore = defineStore("auth", () => {
const userStore = UserStore();
const UI = UIStore();
  const isLoggedIn = ref(false);
  const user = ref({});
  
  const login = async(name, password)=>{ 
  await userStore.getUsers()
    const newLoggedInUser = userStore.users.find((user)=>{
    return user.username==name;
    })

   if(!newLoggedInUser){
    UI.setError("User not found");
    return;
   }
   if(newLoggedInUser.password!==password){
    UI.setError("Wrong password");
    return; 
   }
   isLoggedIn.value=true;
   user.value= newLoggedInUser;
   userStore.changeSelectedUser(newLoggedInUser)
    

  }
  const logout = ()=>{

    isLoggedIn.value= false;
    user.value=ref({})
    userStore.changeSelectedUser({})
  }
  return{isLoggedIn, user, login, logout}
  
});

