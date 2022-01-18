import * as api from '../api';
import * as ActionTypes from '../constants/actionTypes';
// Action Creators
export const getPosts = () => async (dispatch)=> {
    try {
        const { data } = await api.fetchPosts();  //response.data destrucure
        const action ={type: ActionTypes.FETCH_ALL, payload: data}
    
        dispatch(action);

    } catch (error) {
        console.log(error);
    }
    
}

export const createPost = (post) => async (dispatch) => {
    try{
        //  console.log(post);
        const { data } = await api.createPost(post);
        // console.log(da);
        const action = {type: ActionTypes.CREATE, payload: data}
        
        dispatch(action);
    } catch(error){
        console.log(error);
    }
}

export const updatePost = (id,updatePost) => async (dispatch) =>{
    try {
        const { data } = await api.updatePost(id, updatePost);
        
        dispatch({type: ActionTypes.UPDATE, payload: data});

    } catch (error) {
        console.log(error);
    }
}

export const deletePost = (id) => async (dispatch) =>{
    try{
        await api.deletePost(id);
        dispatch({type: ActionTypes.DELETE, payload: id})
    }catch(error) {
        console.log(error);
    }
}


export const likePost = (id) => async (dispatch) =>{
    try {
        const { data } = await api.likePost(id);
        
        dispatch({type: ActionTypes.LIKE, payload: data});

    } catch (error) {
        console.log(error);
    }
}
