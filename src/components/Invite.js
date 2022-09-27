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
            <img src="../images/study.svg" alt="" />
            <span>
                <h1>
                    Create an invite-only place where you belong
                </h1>
                <p>discord servers are organised into topic based channels where you can collaborate,shareand just talk about your day without clogging up a group chat</p>
            </span>
        </Container>        
        </>
    )
}
const Container = styled.div`
height:100vh;
width:100vw;
display:grid;
grid-template-columns:1.3fr 1fr;
grid-gap: 0 2.5rem;
align-items:center;
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