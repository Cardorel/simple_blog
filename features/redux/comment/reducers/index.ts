import { CREATECOMMENT, GETERROR } from "../types";

interface createCommentType{
    isError : boolean;
}

const initialState : createCommentType = {
    isError : false
}

export const createCommentReducer = (state= initialState , action : any) => {
switch (action.type) {
    case CREATECOMMENT:
    return state;
    case GETERROR: 
    return action.payload;
    default:
        return state;
}
}