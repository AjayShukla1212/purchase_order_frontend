import { SET_ERROR } from "../types";


const reducer=(state="default error",action)=>{
    console.log(action.type)
    switch(action.type){
       
        case "SET_ERROR":
           state=action.error;
            console.log(action.error);
            return action.error;
        default:
            return state;

    }
}

export default reducer;