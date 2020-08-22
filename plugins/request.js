import axios from "axios"

export const http = axios.create({
    baseURL:"https://conduit.productionready.io"
})

export default ({store}) =>{
    http.interceptors.request.use(function(config){
        const { user } = store.state
        if(user){
            config.headers.Authorization = `Token ${user.token}`
        }
             return config;
    },function(error){
        return Promise.reject(reeor)
    })
}

