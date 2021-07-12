import styled from 'styled-components'

export const NavMain = styled.nav
`
display: flex;
justify-content: space-around;
align-items: center;
padding: 25px;
`

export const LogoLink = styled.a
`
font-size: 1.5rem;
cursor: pointer;
font-weight: bold;
`

export const AddPostLink = styled.a
`
  background-color: rgb(102, 162, 223);
  padding: 10px 15px;
  border-radius: 3px;
  color: white;
  text-decoration: none;
  cursor: pointer;
`

interface ImageProps {
  src : any;
  alt : string;
}

export const ImageHome = styled.image<any>
`
width: 100%;
  object-fit: cover;
  height: 25em;
`