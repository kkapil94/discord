import React from 'react'
import styled from 'styled-components'
export default function Rel() {
  return (
    <>
    <Container>
        <Content>
            <Mat>
            <h1>RELIABLE TECH FOR STAYING CLOSE</h1>
            <span>Low-latency voice and video feels like you’re in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.</span>
            </Mat>
            <img src="./images/rel.svg" alt="" />
            <Fo>
              <h1>Ready to start your journey?</h1>
            </Fo>
            <Button><button className='win'><i class="fa-brands fa-windows"></i>Download for windows</button></Button>
        </Content>

    </Container>
    </>
  )
}
const Container = styled.div`

`
const Content = styled.div`
display:grid;
grid-template-rows:0.3fr 1fr 0.5fr;
align-items:start;
justify-items:center;
background-color:#f6f6f6;
img{
  width:95%;
  object-fit:cover;

}
`
const  Mat = styled.div`
text-align:center;
padding:0 15rem;
h1{
    font-size:3rem;
    font-weight:900;
    font-family: 'Paytone One', sans-serif;
    letter-spacing:2px;
    line:height:95%;
}
span{
    font-size:1.4rem;
    color:#23272a;
}
`
const Fo = styled.div`
display:flex;
margin-top:7rem;
height: 4rem;
width: 35rem;
position: relative;
font-size: 1.3rem;
padding: 0 3rem;
justify-content:center;
flex-direction:column;
&:before{
  content:"";
  background:url("./images/spar.svg") center center / cover no-repeat;
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  left:0;
  background-size:contain;
}
`
const Button = styled.div`
margin-top:-7rem;
button{
  cursor:pointer;
  font-size:1.3rem ;
  padding: 1rem 2rem;
  border-radius:2rem;
  border:none;
  margin-right:20px;
  background-color:#5865f2;
  color:white;
  font-size:1.8rem;
  i{
    margin-right:1rem;
  }
  transition:all 250ms ease;
  &:hover{
    box-shadow: 5px 5px 10px 10px #e5ecd9;
    background-color:#6f79e6;
  }
}
`