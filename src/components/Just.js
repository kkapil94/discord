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
        <Container data-aos="fade-up">
            <span>
                <h1>
                Where hanging out is easy
                </h1>
                <p>Grab a seat in a voice channel when you’re free. Friends in your server can see you’re around and instantly pop in to talk without having to call.</p>
            </span>
            <img src="../images/just.svg" alt="" />
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
background-color:#f6f6f6;
img{
    justify-self:center;
    padding-right:3rem;
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