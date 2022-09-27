import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <>
    <Container>
          <Contact>
            <h1>Imagine a place</h1>
            <i className="fa-brands fa-twitter"></i><i className="fa-brands fa-instagram"></i><i className="fa-brands fa-facebook"></i><i className="fa-brands fa-youtube"></i>
          </Contact>
          <ul>
            Product
            <li>Download</li>
            <li>Nitro</li>
            <li>status</li>
          </ul>
          <ul>
            Company
            <li>About</li>
            <li>Jobs</li>
            <li>Branding</li>
            <li>Newsroom</li>
          </ul>
          <ul>
            Resources
            <li>College</li>
            <li>Support</li>
            <li>Safety</li>
            <li>Blog</li>
            <li>Feedback</li>
            <li>Developers</li>
            <li>Streamkit</li>
          </ul>
          <ul>
            Policy
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookie Setting</li>
            <li>Guidelines</li>
            <li>Acknowledgements</li>
            <li>Licences</li>
            <li>Moderations</li>
          </ul>
    <Separator className='sep'></Separator>
    <Signup>
     <button className='di'><i className="fa-brands fa-discord"></i> <span>Discord</span></button>
    <button className='bu'>Signup</button>
    </Signup>
    </Container>

    </>
  )
}
const Container = styled.div`
height:90vh;
background-color:#23272a;
display:grid;
grid-template-columns:1.5fr 1fr 1fr 1fr 1fr;
grid-template-rows:5fr 0.2fr 2fr ;
align-items:start;
justify-items:center;
ul{
  padding:5rem 0;
  font-size:20px;
  color:#5865f2;
  li{
    color:white;
    list-style:none;
    margin-top:1rem;
    cursor:pointer;
    &:hover{
      text-decoration:underline;
    }
  }
}
.sep{
  grid-column-start:1;
  grid-column-end:6;
}
`
const Contact = styled.div`
padding:3rem 4rem;
color:#5865f2;
h1{
    font-size:3rem;
    font-weight:900;
    font-family: 'Paytone One', sans-serif;
    letter-spacing:2px;
    line:height:95%;
    text-transform:uppercase;
}
span{
    font-size:1.4rem;
    color:#23272a;
}
i{
  margin-right:2rem;
  font-size:1.8rem;
  color:white;
  cursor:pointer;
}
`
const Separator = styled.div`
width: 90%;
height: 1px;
margin-top:-2.5rem;
margin-bottom: 32px;
background-color:#5865f2;
padding:0 2rem;
`
const Signup = styled.div`
grid-column-start:1;
grid-column-end:6;
display:flex;
justify-content:space-between;
width:100%;
align-items:center;

.bu{
  padding: 1rem 1rem;
  border-radius:2rem;
  border:none;
  margin-right:20px;
  background-color:#5865f2;
  color:white;
  font-size:1rem;
  transition:all 250ms ease;
  cursor:pointer;
  &:hover{
    background-color:#6f79e6;
  }

}
.di{
  background:none;
  border:none;
  font-size:1.5rem;
  color:white;
  padding:0rem 2.5rem;
  font-weight:900;
  font-family: 'Paytone One', sans-serif;
  letter-spacing:2px;
}
`