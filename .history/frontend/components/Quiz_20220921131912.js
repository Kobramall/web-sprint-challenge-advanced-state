import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz, selectAnswer, setMessage} from '../state/action-creators'

function Quiz(props) {
 

  useEffect(() =>{
    props.fetchQuiz()
   }, []);
 
   const sumbitHandler = () =>{
    props.fetchQuiz()
    props.selected === 0 ? props.setMessage('Nice job! That was the correct answer') : props.setMessage('What a shame!That was the incorrect answer')
 }
 
 
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{props.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                {props.trueAnswer}
                <button onClick={()=>{props.selectAnswer(0)}}>
                  {props.selected === 0 ? "SELECTED" : "select"}
                </button>
              </div>

              <div className="answer">
                {props.falseAnswer}
                <button onClick={() =>{props.selectAnswer(1)}}>
                {props.selected === 1 ? "SELECTED" : "select"}
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={sumbitHandler} disable={props.selected === -1 ? true : false}>Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


const mapStateToProps = state =>{
    return {
      question: state.quiz.newQuestion,
      trueAnswer: state.quiz.newTrueAnswer,
      falseAnswer: state.quiz.newFalseAnswer,
      selected: state.selectedAnswer.selected
    }
}


export default connect(mapStateToProps, {fetchQuiz, selectAnswer, setMessage})(Quiz);