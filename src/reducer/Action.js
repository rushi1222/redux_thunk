import Axios from "axios";

export const fetchPosts = ()=>{
 
    return async(dispatch, getState)=>{
        const response =  await Axios.get("https://jsonplaceholder.typicode.com/posts")
        console.log(response.data)
        dispatch({
            type: "FETCH_POSTS",
            payload: response.data
        });
    };
   
};

export const increment =()=>{
    return{
        type: "INCREMENT",

    }
}

export const decrement =()=>{
    return{
        type: "DECREMENT",
        
    }
}