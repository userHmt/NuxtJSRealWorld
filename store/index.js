const cookieperser = process.server ? require('cookieparser'):undefined


export const state = () =>{
    return{
        user:null
    }
}

export const mutations = {
    setUser(state,data){
        state.user = data
    }
} 

export const actions = {
    nuxtServerInit({commit},{req}){
        let user = null
        if(req.headers.cookie){
            const persed = cookieperser.parse(req.headers.cookie)
            try{
                user = JSON.parse(persed.user)
            }catch(err){

            }
        }
        commit('setUser',user)
    }
}





