import React from 'react'
import { CommentBtn, CommentFormContainer, CommentFormStyle, CommentInput, ErrorMessage  } from '../../postDetail/detail-styled-components'

interface CommentFormType {
    handleSubmitComment : React.FormEventHandler<HTMLFormElement>;
    errorMessage : string;
    setCommentValue :  (value: React.SetStateAction<string>) => void;
    commentValue : string;
}

export default function CommentForm({handleSubmitComment , errorMessage , setCommentValue , commentValue} : CommentFormType) {
    return (
        <CommentFormStyle onSubmit={handleSubmitComment}>
            <ErrorMessage>{errorMessage}</ErrorMessage>
            <CommentFormContainer>
              <CommentInput
                type="text"
                onChange={(e) => setCommentValue(e.target.value)}
                value={commentValue}
              />
              <CommentBtn type="submit">Comment</CommentBtn>
            </CommentFormContainer>
          </CommentFormStyle>
    )
}
