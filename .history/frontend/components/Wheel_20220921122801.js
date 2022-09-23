import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { moveClockwise, moveCounterClockwise,fetchQuiz } from '../state/action-creators'

 function Wheel(props) {
 
  

return (
    <div id="wrapper">
      <div id="wheel">
        <div className={props.count === 0 ? "active cog" : "cog"} style={{ "--i": 0 }}>{props.count === 0 ? "B" : ""}</div>
        <div className={props.count === 1 ? "active cog" : "cog"} style={{ "--i": 1 }}>{props.count === 1 ? "B" : ""}</div>
        <div className={props.count === 2 ? "active cog" : "cog"} style={{ "--i": 2 }}>{props.count === 2 ? "B" : ""}</div>
        <div className={props.count === 3 ? "active cog" : "cog"} style={{ "--i": 3 }}>{props.count === 3 ? "B" : ""}</div>
        <div className={props.count === 4 ? "active cog" : "cog"} style={{ "--i": 4 }}>{props.count === 4 ? "B" : ""}</div>
        <div className={props.count === 5 ? "active cog" : "cog"} style={{ "--i": 5 }}>{props.count === 5 ? "B" : ""}</div>{/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn" onClick={props.moveClockwise} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={props.moveCounterClockwise}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    count: state.wheel
  }
}


export default connect(mapStateToProps, {moveClockwise, moveCounterClockwise, fetchQuiz})(Wheel)
