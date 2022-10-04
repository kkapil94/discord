import React,{useEffect,useState} from 'react'
import styled from 'styled-components'
import { useNavigate, useParams } from 'react-router-dom';
import db, { auth } from '../firebase';
export default function Workspace(props) {
    const [title,setTitle]=useState();
    const {id} = useParams();
    const navigate = useNavigate()
    const signOut = ()=>{
      auth.signOut().then(
        ()=>{
          navigate("/");
        }
      )
    }
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
          <button onClick={signOut}>Sign out</button>
        </Workspac> 
    </>
  )
}
const Workspac = styled.div`
height:100vh;
background-color:#34393f;
& > button{
  position: fixed;
    top: 28rem;
    left: 50rem;
    border: none;
    border-radius: 20px;
    background-color: #4c5076;
    font-size: 1.8rem;
    color: #ebe6e6;
}
`
const Nav = styled.div`
height:2.9rem;
box-shadow:0 1px 3px #252222;
display:flex;
align-items:center;
justify-content:space-between;
font-size:1.1rem;
font-weight:600;
color:white;
span{
  cursor:arrow;
}
span i{
  color:grey;
  margin:0 1rem 0 1rem;
  font-size:1.2rem;
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
font-size:1.2rem;
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
  height:1.5rem;
  width:10rem;
  border:none;
  border-radius:5px;
  font-size:1rem;
  color:grey;
  font-weight:100;
  outline:none;
}
`