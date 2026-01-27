import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";
import { UIStore } from "./UIstore";

export const UserStore = defineStore('users', ()=>{
    const UI = UIStore();
    const users = ref([]);
    const selectedUser = ref({})
    const changeUsers = (list)=>{
        users.value= list
    }
    const getUsers = async()=>{
        try{
            UI.changeLoad(); 
             const response = await axios.get("https://dummyjson.com/users");
             
        users.value= response.data.users
        }
       catch(err){
        UI.setError(err)
       }
       finally{
        UI.changeLoad()
       }
    }
    const changeSelectedUser =(user)=>{
        selectedUser.value=user
    }
  
    
    return {users, selectedUser, changeUsers, getUsers, changeSelectedUser}
})