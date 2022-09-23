import React from 'react'
import { connect } from 'react-redux'
import { moveClockwise } from '../state/action-types'

 function Wheel(props) {
 




 

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
        <button id="counterClockwiseBtn" onClick={moveClockwise} >Counter clockwise</button>
        <button id="clockwiseBtn" onClick={wheel}>Clockwise</button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return{
    count: state.wheel
  }
}


export default connect(mapStateToProps, {moveClockwise})(Wheel)
