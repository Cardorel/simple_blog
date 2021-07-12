import { fetchData } from "../../../app/api";
import { postData } from "../../../app/api/setData";
import { CREATEPOST, CURRENTPOST, GETPOST } from "../types";

export const getpostAction = (posts: any) => async (dispatch: any) => {
  dispatch({
    type: GETPOST,
    payload: posts,
  });
};

interface createPostType{
  title: string;
  body: string;
}

export const createpostAction = (post: createPostType) => async (dispatch: any) => {
  await postData('posts' , post)
  dispatch({ type: CREATEPOST});
};

export const currentpostAction = (post: any) => async (dispatch: any) => {
   dispatch({
    type: CURRENTPOST,
    payload: post,
  });
};
