import React from 'react'
import styled from 'styled-components'
export default function Homecon() {
  return (<>
    <Container>
        <h1>IMAGINE A PLACE...</h1>
        <span>...Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vero quisquam, maiores accusamus a soluta fugit illum enim tempore. Illum libero vero nam earum, dolore minus nobis provident laboriosam distinctio.</span>
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
padding:5rem 20rem;
text-align:center;
margin-top:-1rem;
color:white;
h1{
    font-size:4rem;
    font-family: 'Paytone One', sans-serif;
}
span{
    margin:-1rem;
    font-size:20px;
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