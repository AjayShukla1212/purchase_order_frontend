import { combineReducers } from "redux";
import  errorReducer  from "./errorReducer";


const reducers=combineReducers({
    error:errorReducer
})

export default reducers;