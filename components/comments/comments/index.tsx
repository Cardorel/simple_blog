import React, { useState } from "react";
import { useAppDispatch } from "../../../features/app/hooks";
import { createCommentAction } from "../../../features/redux/comment/actions";
import { CurrentPostType } from "../../postDetail";
import { CommentContainerStyle, CommentHeader } from "../../postDetail/detail-styled-components";
import {CommentContainers } from "./CommentContainer";
import CommentForm from "./CommentForm";







export default function Comment({ Post }: CurrentPostType) {
  const [commentValue, setCommentValue] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const dispatch = useAppDispatch();
  const {
    isLoading,
    post: { comments, id },
  } = Post;

  const isCommentEmpty = comments.length < 1 ? true : false;

  const handleSubmitComment = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (commentValue.trim() !== "") {
      dispatch(
        createCommentAction({
          postId: id,
          body: commentValue,
        })
      );
      setCommentValue("");
      setErrorMessage("");
    } else {
      setErrorMessage("The field can not be empty!");
    }
  };

  return (
    <CommentContainerStyle>
      {!isLoading && (
        <div>
          <CommentHeader>Comments</CommentHeader>
          <CommentContainers isCommentEmpty={isCommentEmpty} comments={comments}/>
          <CommentForm 
          handleSubmitComment={handleSubmitComment} 
          errorMessage={errorMessage} 
          setCommentValue={setCommentValue}
          commentValue={commentValue}
          />
        </div>
      )}
    </CommentContainerStyle>
  );
}
