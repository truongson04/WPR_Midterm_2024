 import apiClient from "../api/axios"
export  function getUsers(){
    return new Promise((resolve, reject)=>{
       setTimeout( async()=>{
        try{
             const data = await apiClient.get("/users");
        resolve(data);
       
        }
        catch(err){
            console.log(err);
             reject(err)
        }
       

       }, 5000)
    })
}    