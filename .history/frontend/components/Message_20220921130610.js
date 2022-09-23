import React from 'react'
import { connect } from 'react-redux'

 function Message(props) {
  return <div id="message">Nice job!</div>
}

const mapStateToProps= state =>{
  return{
    message: state.infoMessage.message
  }
}

export default connect()(Message)
