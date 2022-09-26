import React from 'react'
import { connect } from 'react-redux'
import {change,  postQuiz} from '../state/action-creators'

function Form(props) {

  
const onChange = evt => {
    props.change(evt.target.value, evt.target.id)
    console.log(props.newQuestion)
  }

  const onSubmit = evt => {
    evt.preventDefault()   
    props.postQuiz(props.newQuestion, props.newTrueAnswer, props.newFalseAnswer)
       } 
     

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} value={props.newQuestion} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} value={props.newTrueAnswer} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} value={props.newFalseAnswer} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button  id="submitNewQuizBtn" disabled={ props.newQuestion.trim().length < 2 || props.newTrueAnswer.trim().length < 2 || props.newFalseAnswer.trim().length < 2 ? true : false} >Submit new quiz</button>
    </form>
  )
}

const mapStateToProps = state => {
  return{
    newQuestion: state.form.newQuestion,
  newTrueAnswer: state.form.newTrueAnswer,
  newFalseAnswer: state.form.newFalseAnswer
  }
}

export default connect(mapStateToProps, {change, postQuiz})(Form)
