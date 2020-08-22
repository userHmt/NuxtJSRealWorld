import { http } from '@/plugins/request'

export const getArticles = params =>{
    return http({
        method:'GET',
        url:'/api/articles',
        params
    })
}

export const getYourFeedArticles = params =>{
    return http({
        method:'GET',
        url:'/api/articles/feed',
        params
    })
}

export const addFavorite = slug =>{
    return http({
        method:'POST',
        url:`/api/articles/${slug}/favorite`,
    })
}

export const deleteFavorite = slug =>{
    return http({
        method:'DELETE',
        url:`/api/articles/${slug}/favorite`,
    })
}

export const getArticle = slug =>{
    return http({
        method:'GET',
        url:`/api/articles/${slug}`,
    })
}


export const getComments = slug =>{
    return http({
        method:'POST',
        url:`/api/articles/${slug}/comments`
    })
}