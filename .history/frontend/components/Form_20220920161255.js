import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../state/action-creators'

export function Form(props) {


  const onChange = evt => {
         
  }

  const onSubmit = evt => {
       evt.preventDefault()
       console.log(evt.target.value)
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} value={props.newQuestion} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} value={props.newTrueAnswer} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} value={props.newFalseAnswer} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn">Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return{
    newQuestion: state.newQuestion,
  newTrueAnswer: state.newTrueAnswer,
  newFalseAnswer: state.newFalseAnswer
  }
}

export default connect(st => st, actionCreators)(Form)
