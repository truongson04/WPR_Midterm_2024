import axios from "axios";
import { onMounted, ref } from "vue";
export default function useFetch(url){
    const data = ref(null);
 
    const getData= async()=>{
        try{
        const response = await axios.get(url);
        console.log(response)
        data.value = response.data;
        console.log(data.value)
        }
        catch(err){
          console.log(err)

        }
    }
   onMounted(()=>{
    getData();
   })
    return{data}
}