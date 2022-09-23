import React, { useState } from 'react'

export default function Wheel(props) {
 
 const [count, setCount] = useState(0)


 const move = (evt) =>{
  if(evt.target.id === "counterClockwiseBtn"){
      if(count === 0){
         setCount(5)
      }
      else{setCount(count - 1)}
     }
     else if(evt.target.id === "clockwiseBtn"){
      if( count < 5){
        setCount(count + 1)
      }
      else{setCount(0)}
     }
     
 }

 

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className={count === 0 ? "active cog" : "cog"} style={{ "--i": 0 }}>{count === 0 ? "B" : ""}</div>
        <div className={count === 1 ? "active cog" : "cog"} style={{ "--i": 1 }}>{count === 1 ? "B" : ""}</div>
        <div className={count === 2 ? "active cog" : "cog"} style={{ "--i": 2 }}>{count === 2 ? "B" : ""}</div>
        <div className={count === 3 ? "active cog" : "cog"} style={{ "--i": 3 }}>{count === 3 ? "B" : ""}</div>
        <div className={count === 4 ? "active cog" : "cog"} style={{ "--i": 4 }}>{count === 4 ? "B" : ""}</div>
        <div className={count === 5 ? "active cog" : "cog"} style={{ "--i": 5 }}>{count === 5 ? "B" : ""}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={move} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={move}>Clockwise</button>
      </div>
    </div>
  )
}
