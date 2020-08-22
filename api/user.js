import { http } from '@/plugins/request'



export const login = data =>{
    return http({
        method:'POST',
        url:'/api/users/login',
        data
    })
}


export const register = data =>{
    return http({
        method:'POST',
        url:'/api/users',
        data
    })
}