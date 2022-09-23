import React from 'react'

export default function Wheel(props) {
 
 let count = 0

 const move = (evt) =>{
    console.log(count)
  if(evt.target.id === "counterClockwiseBtn"){
      if(count > 0){
        return count = count - 1
      }
      else{count = 5}
     }
     else if(evt.target.id === "clockwiseBtn"){
      if( count < 5){
        count = count + 1
      }
      else{count = 0}
     }
     else{return count}
 }

 

  return (
    <div id="wrapper">
      <div id="wheel">
        <div className="cog active" style={{ "--i": 0 }}>{move === 0 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 1 }}>{move === 1 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 2 }}>{move === 2 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 3 }}>{move === 3 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 4 }}>{move === 4 ? "B" : ""}</div>
        <div className="cog" style={{ "--i": 5 }}>{move === 5 ? "B" : ""}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={move} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={move}>Clockwise</button>
      </div>
    </div>
  )
}
