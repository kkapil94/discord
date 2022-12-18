import React from 'react'
import styled from "styled-components"
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth,provider } from '../firebase'
import { useNavigate,Navigate } from 'react-router-dom';
export default function Header() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const signIn = (e)=>{
    e.preventDefault()
      auth.signInWithPopup(provider)
      .then(
        ()=>navigate("/channels") )
      .catch((error)=>{
        alert(error.messege);
      })
  }
  return (<>
    
    <Container>
        <Logo id='logo'>
        <img src="../images/pngegg.png" alt="" />
        <span id='navSpan'>Discord</span>
        </Logo>
        <Nav>
          <ul id='navItems'>
            <li>Download</li>
            <li>Nitro</li>
            <li>Discover</li>
            <li>Safety</li>
            <li>Support</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </Nav>
        <Signin id='loginButton'>
          <button  onClick={!user?signIn:()=>navigate("/channels")}>{!user?"Login":"Open Discord"}</button>
        </Signin>
    </Container></>
  )
}
const Container = styled.div`
height:80px;
width:100vw;
display:flex;
align-items:center;
`
const Logo = styled.div`
display:flex;
align-items:center;
padding-left:75px;
img{
height:35px;
width:35px;
padding:20px 10px;
object-fit:cover;
}
span{
    font-weight:bolder;
    letter-spacing:1.5px;
    font-size: larger;
    color: white;
}
`
const Nav = styled.div`
flex:1;
ul{
  display:flex;
  justify-content:center;
}
ul li {
  list-style:none;
  margin:0px 20px;
  color:white;
  font-weight:bold;
  cursor:pointer;
  &:hover{
  text-decoration:underline;
  }
}
`
const Signin = styled.div`
border-radius: 50px;
background-color: white;
padding: 7px 10px;
margin-left:3rem;
margin-right: 6rem;
transition:all 500ms  ;
cursor:pointer;
&:hover{
  color:#5865f2;
  box-shadow: 2px 2px 5px 5px #3d49cb;
}
button{
  background:none;
  border:none;
  cursor:pointer;
  &:hover{
    color:#5865f2;
  }

}
`