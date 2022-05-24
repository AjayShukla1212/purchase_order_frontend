

import { SET_ERROR } from "../types"


export const setError=(error)=>{
    
    return (dispatch)=>{
        dispatch({
            type: "SET_ERROR",
            error: error
    })}
}
