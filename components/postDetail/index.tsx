import React from "react";
import { currentPostType } from "../../features/redux/post/reducers/currentPost";
import { Article } from "./Article";

export interface CurrentPostType {
  Post: currentPostType;
}

export default function CurrentPost({ Post }: CurrentPostType) {
  const {
    post: { body, title },
    isLoading,
  } = Post;
    
  return <div>
      {
          isLoading ? <p>Loading..</p> : <Article title={title} body={body}/>
      }
  </div>;
}
