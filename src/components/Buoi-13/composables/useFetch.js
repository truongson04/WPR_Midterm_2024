import axios from "axios";
import { onMounted, ref } from "vue";
export default function useFetch(url){
    const data = ref(null);
 
    const getData= async()=>{
        try{
        const response = await axios.get(url);
        data.value = response.data;
        }
        catch(err){
        window.alert("There is something wrong")

        }
    }
   onMounted(()=>{
    getData();
   })
    return{data}
}