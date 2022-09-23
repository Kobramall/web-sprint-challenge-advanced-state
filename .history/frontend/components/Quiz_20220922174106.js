import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer, setMessage, postAnswer} from '../state/action-creators'

function Quiz(props) {
 
     props.count === 0 ? props.fetchQuiz() : null
 
 
   const sumbitHandler = () =>{
       props.postAnswer(props.selected, props.selected === 0 ? props.trueAnswer.id : props.falseAnswer.id, props.question.id) 
 }
 
 
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        props.isFetching === false ? (
          <>
            <h2>{props.question.question}</h2>

            <div id="quizAnswers">
              <div className={props.selected === 0 ? "answer selected" : "answer"}>
                {props.trueAnswer.text}
                <button onClick={()=>{props.selectAnswer(0), props.setMessage('')}}>
                  {props.selected === 0 ? "SELECTED" : "select"}
                </button>
              </div>

              <div className={props.selected === 1 ? "answer selected" : "answer"}>
                {props.falseAnswer.text}
                <button onClick={() =>{props.selectAnswer(1), props.setMessage('')}}>
                {props.selected === 1 ? "SELECTED" : "select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={sumbitHandler} disabled={props.selected === -1 ? true : false}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


const mapStateToProps = state =>{
    return {
      question: state.quiz.question,
      trueAnswer: state.quiz.trueAnswer,
      falseAnswer: state.quiz.falseAnswer,
      isFetching: state.quiz.isFetching,
      selected: state.selectedAnswer.selected,
      count: state.quiz.count
    }
}


export default connect(mapStateToProps, {fetchQuiz, selectAnswer, setMessage, postAnswer})(Quiz);