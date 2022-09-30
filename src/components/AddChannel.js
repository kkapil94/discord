import React, { useState } from "react";
import styled from "styled-components";
import db from "../firebase";
export default function AddChannel(props) {
  const [input, setInput] = useState("");
  const channelName = () => {
    const channelName = input;
    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
    props.close(false)
  };
  return props.trigger ? (
    <>
      <Container>
        <Popup>
          <div className="head">
            <h2>
              Create Channel
              <i
                className="fa-sharp fa-solid fa-xmark"
                onClick={() => props.close(false)}
                style={{cursor:"pointer"}}
              ></i>
            </h2>
            <span>in Text Channels</span>
          </div>
          <div className="type">
            <h4>Channel type</h4>
            <div className="tym">
              <div>
                <i className="fa-sharp fa-solid fa-hashtag"></i>
              </div>
              <div>
                <h3>Text</h3>
                <span>
                  Send messeges, images, opinions, gifs, emojis and puns
                </span>
              </div>
              <input type="radio" name="" id="" />
            </div>
            <div className="tym tym2">
              <div>
                <i className="fa-sharp fa-solid fa-hashtag"></i>
              </div>
              <div>
                <h3>Voice</h3>
                <span>Hang out together with voice, vide and screen share</span>
              </div>
              <input type="radio" name="" id="" />
            </div>
          </div>
          <div className="nam">
            <h4>Channel name</h4>
            <div className="namm">
              <i className="fa-sharp fa-solid fa-hashtag"></i>
              <input
                type="text"
                placeholder="new-channel"
                id="text"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
          </div>
          <div className="bott">
            <button className="can" onClick={()=>props.close(false)}>Cancel</button>
            <button className="cre" onClick={channelName} type="submit">
              Create channel
            </button>
          </div>
        </Popup>
      </Container>
    </>
  ) : (
    ""
  );
}
const Container = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  botom: 0;
  background-color: black;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.85;
`;
const Popup = styled.div`
  height: 37rem;
  width: 35rem;
  background: black;
  color: white;
  border-radius: 15px;
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 1fr;
  background-color: #3a4048;
  .head {
    padding: 1rem;
    h2 {
      margin-bottom: 0;
    }
    h2 i {
      position: relative;
      left: 21rem;
      color: grey;
      font-size: 1.9rem;
    }
    span {
      color: #a4a2a8;
    }
  }
  .type {
    padding: 0 1.5rem 0 1.5rem;
    h4 {
      color: #c0bec5;
    }
    div > h3 {
      color: #c0bec5;
    }
    div > span {
      color: #93909b;
    }
  }
  .tym2 {
    margin-top: 1rem;
  }
  .tym {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #303238;
    border-radius: 5px;
    cursor: pointer;
    i {
      font-size: 1.8rem;
      margin-left: 0.5em;
      margin-top: 1.5rem;
      font-weight: 200;
      color: #93909b;
    }
    input {
      margin-right: 1.5em;
      transform: scale(2);
      accent-color: white;
    }
    div {
      h3 {
        margin-bottom: 0;
      }
      margin-bottom: 1rem;
    }
  }
  .nam {
    padding: 0 1.5rem 0 1.5rem;
  }
  .namm {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #1b1c20;
    border-radius: 5px;
    height: 3rem;
    i {
      font-size: 1.2rem;
      font-weight: 100;
      margin-left: 0.5rem;
    }
    input {
      background-color: ;
      border: none;
      outline: none;
      font-size: 1.2rem;
      right: 15rem;
      background-color: #1b1c20;
      color: grey;
      width:100%;
    }
  }
  .bott {
    background-color: #4d4d55;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    button {
      margin: 0 1rem 0 1rem;
      font-size: 1.2rem;
      font-weight: bold;
      border: none;
      outline: none;
      color: white;
      background-color: transparent;
      cursor: pointer;
    }
    .cre {
      background-color: #6b6be1;
      padding: 1rem 0.5rem 1rem 0.5rem;
      border-radius: 3px;
      &:hover {
        background-color: #5858ed;
      }
    }
    .can {
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
