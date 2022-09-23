import React from 'react'
import { connect } from 'react-redux'
import { postAnswer, change  } from '../state/action-creators'

function Form(props) {

console.log(props.newQuestion)
  
const onChange = evt => {
    change(evt.target.value, evt.target.id)
  }

  const onSubmit = evt => {
       evt.preventDefault()
       props.postAnswer(evt)
        
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

export default connect(mapStateToProps, { postAnswer, change })(Form)
