import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchQuiz } from '../state/action-creators'

function Quiz(props) {
 
 useEffect(() =>{
  fetchQuiz()
 }, []);
 
 
 
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
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                {props.falseAnswer}
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn" onClick={fetchQuiz()}>Submit answer</button>
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
      falseAnswer: state.quiz.newFalseAnswer
    }
}


export default connect(mapStateToProps, {fetchQuiz})(Quiz);