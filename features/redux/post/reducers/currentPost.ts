import { PostType } from "../../interface_typescript"
import { CURRENTPOST } from "../types"


export interface currentPostType {
    post : PostType;
    isLoading : boolean
}

const initialState : currentPostType = {
    post : {
        id : 0,
        body : "",
        title: "",
        comments : []
    },
    isLoading : true
}

export const currentPostReducer = (state = initialState , action : any) => {
    switch (action.type) {
        case CURRENTPOST:
            return{
                ...state,
                post : action.payload,
                isLoading: false
            }
        default:
            return state;
    }
}