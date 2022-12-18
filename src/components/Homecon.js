import React from 'react'
import styled from 'styled-components'
import '../index.css'
export default function Homecon() {
  return (<>
    <Container id='content'>
        <h1>IMAGINE A PLACE...</h1>
        <span id='conText'>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</span>
    </Container>
    <Button>
      <button className='win'><i className="fa-brands fa-windows"></i> Download for windows</button>
      <button className='bro'>Open discord in browser</button>
    </Button>
    </>
  )
}
const Container = styled.div`
display:flex;
flex-direction:column;
align-items:center;
padding:5rem 15rem;
text-align:center;
margin-top:-1rem;
color:white;
h1{
    font-size:4rem;
    font-family: 'Paytone One', sans-serif;
    line-height:0.5rem;
    margin:4rem 0 5rem 0;
  }
span{
    margin:-1rem;
    font-size:1.2rem;
    line-height:2rem;
}
`
const Button =styled.div`
margin-top:-3rem;
button{
  font-size:1.3rem ;
  padding: 1rem 2rem;
  border-radius:2rem;
  border:none;
  margin-right:20px;
  transition:all 500ms;
}
.bro{
  background-color:#23272a;
  color:white;
 cursor:pointer;
  &:hover{
    box-shadow:10px 10px 1rem #3d49cb;
  }
}
.win{
  cursor:pointer;
  img{
    height:35px;
    width:35px;
    object-fit:cover;
  }
  &:hover{
    color:#5865f2;
    box-shadow:10px 10px 1rem #3d49cb;
  }
}
`