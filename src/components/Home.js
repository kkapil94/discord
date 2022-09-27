import React from 'react'
import Header from "./Header"
import styled from 'styled-components'
import Homecon from './Homecon'
import Invite from './Invite'
import Just from "./Just"
import Coach from "./Coach"
import Rel from './Rel'
import Footer from './Footer'
export default function Home() {
   
  return (<>
  <Hom>
    <Container>
        <Header/>
        <Homecon/>
    </Container>
         <Invite/>
         <Just/>
         <Coach/>
         <Rel/>
         <Footer/>
  </Hom>
         </>
  )
}
const Hom=styled.div`
overflow:hidden;
`
const Container = styled.div`
height:100vh;
max-width:100vw;
position:relative;
display:flex;
flex-direction:column;
align-items:center;
padding:0 2rem;
&:before{
  content:"";
  background:url("https://theme.zdassets.com/theme_assets/678183/b7e9dce75f9edb23504e13b4699e208f204e5015.png") center  center / cover no-repeat ;
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:-1;
}
`