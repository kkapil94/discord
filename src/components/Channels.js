import React from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom'
export default function Channels(props) {
  const {id} = useParams();
  const navigate = useNavigate()
  const desc= ()=>{
    navigate("/channels/"+props.id);
  }
  return (
    <>
    <Box onClick={desc} style={(props.id===id)?{backgroundColor:"#3d4047"}:null}>
         <i className="fa-sharp fa-solid fa-hashtag"></i>
          <span>{props.title}</span>
          <Button className='button'style={(props.id===id)?{display:"block"}:null}>
          <i className="fa-solid fa-user-plus"></i>
          <i className="fa-solid fa-gear"></i>
          </Button>
     </Box>
    </>
  )
}
const Box=styled.div`
height:2.1rem;
width:95%;
background-color:#30323b;
border-radius:5px;
display:flex;
align-items:center;
color:#e4dcdc;
position:relative;
span{
  font-size:1em;
  flex:1;
}
& > i{
  margin:0 .5em 0 .5rem;
  font-size:1.2rem;
  color:grey;
}
&:hover{
  cursor:pointer;
  background-color:#3d4047;
}
&:hover > .button{
  display:block;
}
`
const Button = styled.div`

color: #949a9d;
display:none;
i{
  font-size:.8em;
  &:hover{
    color:#d4d7d7
  }
}
.fa-gear{
  margin-left:0.8em;
}

`