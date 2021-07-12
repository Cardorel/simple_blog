import React from "react";
import {
  CommentContent,
  CommentContentHeaderThree,
  CommentContentParagraph,
  ParagraphNoComment,
} from "../../postDetail/detail-styled-components";

export const CommentContainers = ({ isCommentEmpty, comments }: any) => {
  return isCommentEmpty ? (
    <ParagraphNoComment>
      You will find all comments here!No comment for now
    </ParagraphNoComment>
  ) : (
    comments &&
      comments.map(({ body, id }: any) => (
        <CommentContent key={id}>
          <CommentContentHeaderThree>{id}</CommentContentHeaderThree>
          <CommentContentParagraph>{body}</CommentContentParagraph>
        </CommentContent>
      ))
  );
};
