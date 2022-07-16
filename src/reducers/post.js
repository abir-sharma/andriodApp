import { createReducer } from "@reduxjs/toolkit";


export const postsReducer=createReducer({posts:[]},{
    FETCH_POSTS_REQUEST:(state,action)=>{
        state.loading=true
    },
    FETCH_POSTS_SUCCESS:(state,action)=>{
        state.loading=false
        state.posts=action.payload
    },
    FETCH_POSTS_FAIL:(state,action)=>{
        state.loading=false
        state.errors=action.payload
    },
    CLEAR_ERRORS:(state,action)=>{
        state.errors=null
    }
})