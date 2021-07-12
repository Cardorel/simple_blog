import { postData } from "../../../app/api/setData";
import { CREATECOMMENT, GETERROR } from "../types";

interface CreateCommentype{
    postId : number,
    body: string
 }
 

export const createCommentAction = (comment : CreateCommentype ) => async (dispatch : any) =>{
    try {
        await postData('comments' , comment);
    dispatch({
        type : CREATECOMMENT
    })
    } catch (error) {
        dispatch({
            type : GETERROR,
            payload : true
        })
    }
}