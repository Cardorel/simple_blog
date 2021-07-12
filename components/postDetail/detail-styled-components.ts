import styled from "styled-components";

export const DetailPostContainer = styled.div`
width: 80%;
margin: auto;
padding-top: 35px;
height: 400px;
`

export const DetailPostHeader = styled.h1`
margin-bottom: 35px;
&::first-letter{
    text-transform: uppercase;
}
`

export const CommentContainerStyle = styled.div`
width: 95%;
margin: auto;
padding-bottom: 25px;
`
export const CommentHeader = styled.h2`
 &::after{
    content: "";
    height: 1px;
    width: 60%;
    margin-top: 12px;
    margin-bottom : 25px;
    background-color: rgb(12, 12, 12 , 0.4);
    display: block;
 }
`

export const CommentContent = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`

export const CommentContentHeaderThree = styled.h3`
background-color: #ddd;
padding: 10px;
border-radius: 10px;
&::first-letter{
    text-transform: uppercase;
}
`

export const CommentContentParagraph = styled.p`
padding: 10px;
width: 80%;
border: 1px solid #ddd;
border-radius: 8px;
&::first-letter{
    text-transform: uppercase;
}

`

export const ParagraphNoComment = styled.p`
text-align: center;
margin: 50px 0;
padding: 10px;
border: 1px solid;
`

export const CommentFormStyle = styled.form`
width: 85%;
margin-top: 15px;
`

export const CommentFormContainer = styled.div`
display: flex;
`

export const CommentInput = styled.input`
width: 90%;
padding: 15px 12px;
outline: none;
border: 1px solid #ddd;
border-right: none;
`

export const CommentBtn = styled.button`
    outline: none;
    border-left: none;
    border: 1px solid #ddd;
    cursor: pointer;
    background-color: mediumseagreen;
    color: white;
    font-size: large;
`

export const ErrorMessage = styled.small`
color: red;
font-size: 10px;
text-align: center;
`