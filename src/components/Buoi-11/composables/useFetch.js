import axios from "axios";
import { onMounted, ref } from "vue";

export  function useFetch(url){
    const users = ref(null);
    const error = ref("");
    const loading = ref(false);
     const fetchApi = async ()=>{
        try{
            loading.value= true
            const res = await axios.get(url);
            users.value= res.data;
            console.log(users.value)
            
            
        }
        catch(err){
            error.value= err
        }
        finally{
            loading.value=false
        }
     }
    onMounted(()=>{
        fetchApi();
    })
    return {users, error, loading}
}