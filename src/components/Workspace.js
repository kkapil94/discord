import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom';
import db from '../firebase';
export default function Workspace(props) {
    const [title,setTitle]=useState();
    const {id} = useParams();
    useEffect(() => {
        db.collection("channels").doc(id).get().then(
          (doc)=>{
        if(doc.id===id){
            setTitle(doc.data().channelName)
        }
        }
         )
      },[id])
  return (
    <>
       <Workspac>
          <Nav>
            <span><i className="fa-sharp fa-solid fa-hashtag"></i>{title}</span> 
            <Ele>
            <i className="fa-sharp fa-solid fa-hashtag" style={{fontWeight:'100'}}><i className="fa-solid fa-message" style={{border:"1px solid #252222"}}></i></i>
            <i className="fa-solid fa-bell"></i>
            <i className="fa-solid fa-thumbtack"></i>
            <i className="fa-solid fa-user-group"></i>
            <input type="text" placeholder='Search' />
            <i className="fa-sharp fa-solid fa-inbox"></i>
            </Ele>
          </Nav>
          <Mess>

          </Mess>
        </Workspac> 
    </>
  )
}
const Workspac = styled.div`
height:100vh;
background-color:#34393f;

`
const Nav = styled.div`
height:3.5rem;
box-shadow:0 1px 3px #252222;
display:flex;
align-items:center;
justify-content:space-between;
font-size:1.3rem;
font-weight:800;
color:white;
span{
  cursor:arrow;
}
span i{
  color:grey;
  margin:0 1rem 0 1rem;
  font-size:1.6rem;
  font-weight:100;
}
.fa-thumbtack{
  rotate:42deg;
}
`
const Mess = styled.div`

`
const Ele = styled.div`
color:#babdbc;
margin-right:1rem;
i:hover{
  cursor:pointer;
}
&>i{
margin-left:1rem;
font-size:1.5rem;
i{
  font-size:0.8rem;
  position:relative;
  top:4px;
  right:10px;
}
}
input{
  background-color:#201e1e;
  margin-left:1rem;
  height:1.8rem;
  width:12rem;
  border:none;
  border-radius:5px;
  font-size:1rem;
  color:grey;
  font-weight:100;
  outline:none;
}
`