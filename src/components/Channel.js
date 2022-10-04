import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import db from "../firebase"
import Channels from './Channels';
import Workspace from './Workspace';
import AddChannel from './AddChannel';
export default function Channel(props) {
  
  const [cha,setCha]= useState();
  const [trigger,setTrigger] = useState(false);
  const addChannel = ()=>{
    setTrigger(true)
}
  useEffect(() => {
    db.collection("channels").onSnapshot((snapshot)=>{
    let channel = snapshot.docs.map((doc)=>{
          return {id:doc.id,...doc.data()}
      });
      setCha(channel)
    });
  }, [])
 
  
  return (
    <>
    <AddChannel trigger={trigger} close={setTrigger} />
    <Container>
        <Sidebar>
          <span className='span'></span>
        <i className="fa-brands fa-discord"></i>
        <Sep></Sep>
        <img src="../images/ser.png" alt="" />
        <img src="../images/ser.png" alt="" />
        <img src="../images/ser.png" alt="" />
        <i className="fa-solid fa-plus add"></i>
        </Sidebar>
        <Ser>
          <Head>
          <h1>My server</h1>
          <img src='../images/drop.png' alt=''/>
          <div className='line'></div>
          </Head>
          <Chann>
          <Chan>
          <i className="fa-solid fa-chevron-down chane"></i>
          <span className='h'>Text channels</span>
          <span className='add' onClick={addChannel}>+</span>
         </Chan>
          {cha&&
            cha.map((ch)=>(
              <Channels key={ch.id} title={ch.channelName} id={ch.id}/>
            ))
          }
         </Chann>
         
        </Ser>
              <Workspace />
              
    </Container>
    
    </>
  )
}
const Container = styled.div`
display:grid;
grid-template-columns:0.8fr 2.5fr 10fr;
font-family: 'Lato', sans-serif;
@media(max-height:500px){
  grid-template-columns:0.9fr 2.9fr 9fr;
}
`
const Sidebar = styled.div`
display:flex;
flex-direction:column;
align-items:center;
background-color:#27282e;
height:100vh;
span{
  height: 1.5rem;
  width: 5px;
  background-color: white;
  position: absolute;
  left: 0;
  top: 1.9rem;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;
  display:none;
}
i{
  font-size: 1.4rem;
  margin: 1rem 0 1rem 0;
  padding: 0.7rem;
  border-radius: 50%;
  background-color: #373d40;
  color: #e5eaed;
  height: 1.5rem;
    &:hover{
        border-radius:35%;
        color:white;
        background-color:#5865f2;
        cursor:pointer;
    }
    
}
.add{
  font-size: 1.4rem;
  margin: 1rem 0 1rem 0;
  padding: 0.8rem;
  border-radius: 50%;
  background-color: #373d40;
  color: #e5eaed;
    &:hover{
        border-radius:35%;
        color:white;
        background-color:#5865f2;
        cursor:pointer;
    }
}
img{
    margin:.5rem 0 .5rem 0;
    border-radius:50%;
    background-color:#34353c;
    color:#d0c4c8;
    height:3rem;
    width:3rem;
    &:hover{
      cursor:pointer;
    }
}
`
const Ser = styled.div`
height:100vh;
background-color:#30323b;
box-shadow:2rem 0 grey;
`
const Head = styled.div`
display:flex;
align-items:center;
height:2.9em;
box-shadow:0 1px 2px #252222;
img{
  height:1rem;
  width:1rem;
  margin-left:8em;
}
h1{
  display: inline-block;
  color: #e4dcdc;
  font-size: .9rem;
  margin-left:1rem;
}
&:hover{
  background-color:#3d3f49;
  cursor:pointer;
}
`

const Chann = styled.div`
display:flex;
flex-direction:column;
align-items:center;

`
const Chan = styled.div`
margin-top:.8em;
font-size:0.8rem;
font-weight:800;
color:grey;
text-transform:uppercase;
display:flex;
align-items:center;
.chane{
  font-size:0.6rem;
  margin:1px .5rem 0 -1rem;
}
.add{
  margin-left:5.3rem;
  font-size:1.5rem;
  &:hover{
    color:#d4d7d7;
  }
}
&:hover{
  cursor:pointer;
}
&:hover>.h{
    color:#d4d7d7;
}
&:hover>i{
  color:#d4d7d7;
}
`


const Sep = styled.div`
height:3px;
background-color:#34353c;
width:2.5rem;
margin-top:-5px;
margin-bottom:.5rem;
`
