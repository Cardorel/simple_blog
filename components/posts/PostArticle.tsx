import React from "react";
import { stateType } from "../../features/redux/post/reducers";
import { PostItemContainer } from "./PostItem-styled-components";
import { EachPostItem } from "./PostItem";

interface PostItemType {
  Posts: stateType;
}

export default function PostItem({ Posts }: PostItemType) {
  const { posts, isLoading } = Posts;

  return (
    <PostItemContainer>
      {isLoading ? <h2>Loading...</h2> : <EachPostItem posts={posts} />}
    </PostItemContainer>
  );
}
