
import axios from "axios"
const genRandom = ()=>{
    let result ="";
    for(let i=0; i<5; i++){
        result+=Math.ceil(Math.random()*10)
    }
    return result
}
const apiClient = axios.create({
    baseURL:"https://jsonplaceholder.typicode.com",
    timeout: 1000,

})
apiClient.interceptors.request.use(
    (config)=>{
        config.headers.Authorization= `Bearer ${genRandom()}`;
        return config
    }, 
    (err)=>{
        console.log(err);
        return Promise.reject(err)
    }

)
apiClient.interceptors.response.use(
    (response)=>{
        return response.data
    },
    (err)=>{
        if(err.status==401){
            console.log("Unauthorized");
            return Promise.reject(err);
        }
        console.log(err);
        return Promise.reject(err)

    }
)
export default apiClient