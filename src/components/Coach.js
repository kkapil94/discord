import React,{useEffect} from 'react'
import styled from "styled-components"
import Aos from 'aos'
import "aos/dist/aos.css";
export default function Invite(){
    useEffect(() => {
        Aos.init({duration:2000})
       }, [])

    return(
        
        <>
        <Container id='poster1' data-aos="fade-up">
            <img src="../images/coach.svg" alt="" />
            <span>
                <h1>
                From few to a fandom
                </h1>
                <p>Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.</p>
            </span>
        </Container>        
        </>
    )
}
const Container = styled.div`
height:100vh;
width:100vw;
display:grid;
grid-template-columns:1fr 1.3fr;
grid-gap: 0 2.5rem;
align-items:center;
@media (max-height: 500px) {
    span{
      h1{
          padding:0rem 0rem;
        font-size:1.9rem;
      }
      p {
        font-size: 1.2rem;
      }
    }
  }
img{
    justify-self:end;
}
span{
    font-size:1.5rem;
    justify-self:center;
    padding:0 4em;
    p{
        color:#23272a;
    }
    h1{
        font-family: 'Paytone One', sans-serif;
    }
}
`