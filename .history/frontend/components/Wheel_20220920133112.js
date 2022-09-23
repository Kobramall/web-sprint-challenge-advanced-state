import React from 'react'

export default function Wheel(props) {
 
 let count = 0

 const move = (evt, count) =>{
     if(evt.id === "counterClockwiseBtn"){
      if(count > 0){
        count = count - 1
      }
      else{count = 5}
     }
     else{
      if( count < 5){
        count = count + 1
      }
      else{count = 0}
     }
 }

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>{count === 0 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 1 }}>{count === 1 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 2 }}>{count === 2 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 3 }}>{count === 3 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 4 }}>{count === 4 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 5 }}>{count === 5 ? "B" : ""}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={move} >Counter clockwise</button>
        <button id="clockwiseBtn">Clockwise</button>
      </div>
    </div>
  )
}
