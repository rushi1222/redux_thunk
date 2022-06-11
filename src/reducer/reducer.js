export const counterReducer = (state = 0, action)=>{
    console.log("Our action type is", action.type);

 switch (action.type){
    case("INCREMENT"):

    return state.counterReducer+1;
    case("DECREMENT"):
    return state.counterReducer-1;
    default:
 return state;
 }
};

export const apiReducer = (state = 0, action)=>{
   console.log("Our action type is", action.type);

switch (action.type){
   case("FETCH_POSTS"):
   return state.apiReducer
   console.log(state)
   default:
return state;
}
};