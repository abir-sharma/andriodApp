import * as api from '../api/index'

export const getPosts=()=>async(dispatch)=>{
    try {
        dispatch({type:"FETCH_POSTS_REQUEST"})
        const {data}=await api.fetchPosts()
        dispatch({
            type:"FETCH_POSTS_SUCCESS",
            payload:data
        })
    } catch (error) {
        dispatch({
            type:"FETCH_POSTS_REQUEST",
            payload:error.message
    })
        console.log(error.message)
    }
}

export const clearErrors=()=>{
    dispatch({type:"CLEAR_ERRORS"})
}