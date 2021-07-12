import { PostType } from "../../interface_typescript";
import { CREATEPOST, GETPOST } from "../types";

export interface stateType{
    posts : PostType [];
    isLoading : boolean;
}

const initialState : stateType = {
    posts: [],
    isLoading : true,
}

export const postReducer = (state = initialState , action : any) => {
    switch (action.type) {
        case GETPOST:
            return{
                ...state,
                posts : [...action.payload],
                isLoading: false
            }
        case CREATEPOST:
            return{
                ...state,
                posts : [...state.posts , action.payload],
                isLoading : true
            }
        default:
            return state;
    }
} 