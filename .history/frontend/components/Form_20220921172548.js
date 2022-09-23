import React from 'react'
import { connect } from 'react-redux'
import { postAnswer, change, setMessage, postQuiz, resetForm  } from '../state/action-creators'

function Form(props) {

 
 
  const disable = (str) => {
       return str.length
 }

 
  
const onChange = evt => {
    props.change(evt.target.value, evt.target.id)
  }

  const onSubmit = evt => {
       console.log(evt.target)
    evt.preventDefault()
       props.setMessage(`Congrats: "${props.newQuestion}" is a great question!`)
       props.postAnswer(evt.target)
       props.postQuiz()
       props.resetForm()
        
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input maxLength={50} value={props.newQuestion} onChange={onChange} id="newQuestion" placeholder="Enter question" />
      <input maxLength={50} value={props.newTrueAnswer} onChange={onChange} id="newTrueAnswer" placeholder="Enter true answer" />
      <input maxLength={50} value={props.newFalseAnswer} onChange={onChange} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={ disable(props.newQuestion) < 1 ? true : false}>Submit new quiz</button>
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

export default connect(mapStateToProps, { postAnswer, change, setMessage, postQuiz, resetForm })(Form)
