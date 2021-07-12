import styled from "styled-components";

export const PostContainer = styled.div
`
width: 80%;
margin: auto;
height: 200px;
`

export const PostHeader = styled.h2`
text-transform: capitalize;
&::first-letter{
    text-transform: uppercase;
}
`

export const PostItemContainer = styled.div
`
padding: 30px;
`

export const GoToPost = styled.a
`
    margin-left: 5px;
    text-decoration: none;
    color: blue;
    cursor: pointer;
`

export const PostContent = styled.div
`
margin: 40px 15px;
padding: 30px;
-webkit-box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px; 
box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
transition: box-shadow 1s ease-in-out;
&:hover{
    box-shadow: rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px;
    transition: box-shadow 1s ease-in-out;
}
`

export const NoPostFound = styled.p`text-align: center ; margin: 60px 0;`

export const ArticleParagraph = styled.p`
color: #738a94;
&::first-letter{
    text-transform: uppercase;
}
`