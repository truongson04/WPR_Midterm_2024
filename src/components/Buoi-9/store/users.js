import { defineStore } from "pinia"
import { ref } from "vue"
const useUsers = defineStore("users", ()=>{
    const userList = ref([]);
    return {userList}
})
export default useUsers