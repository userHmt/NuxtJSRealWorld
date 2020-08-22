import { http } from '@/plugins/request'

export const getTags = () =>{
    return http({
        method:'GET',
        url:'/api/tags'
    })
}