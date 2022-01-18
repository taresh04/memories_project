import * as api from '../api';
import * as ActionTypes from '../constants/actionTypes';
// Action Creators
export const signin = (formData, navigate) => async (dispatch) => {
    try{
        const { data } = await api.signIn(formData);  //response.data destrucure
        dispatch({ type:ActionTypes.AUTH, data});
        navigate('/');
        
    } catch(error) {
        console.log(error);
    }
} 

export const signup = (formData, navigate) => async (dispatch)=> {
    try {
        const { data } = await api.signUp(formData);  //response.data destrucure
        // const action ={type: ActionTypes.FETCH_ALL, payload: data}
        dispatch({ type:ActionTypes.AUTH, data });
        navigate('/');
        // dispatch(action);

    } catch (error) {
        console.log(error);
    }
    
}

