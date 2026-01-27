import { defineStore } from "pinia";
import { ref } from "vue";
export const UIStore = defineStore('UI', ()=>{
    const loading = ref(false);
    const errorMessage = ref("");
    const changeLoad =()=>{
        loading.value= !loading.value
    }
    const setError = (error)=>{
        errorMessage.value= error
    }
    return {loading, errorMessage, changeLoad, setError}
})