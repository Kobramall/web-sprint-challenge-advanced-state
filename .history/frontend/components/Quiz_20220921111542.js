import React from 'react'
import { connect } from 'react-redux'
import { fetchQuiz } from '../state/action-creators'

function Quiz(props) {
 
 console.log(props)
 props.fetchQuiz()
 
  return (
    <div id="wrapper">
      {
        // quiz already in state? Let's use that, otherwise render "Loading next quiz..."
        true ? (
          <>
            <h2>{props.question}</h2>

            <div id="quizAnswers">
              <div className="answer selected">
                A function
                <button>
                  SELECTED
                </button>
              </div>

              <div className="answer">
                An elephant
                <button>
                  Select
                </button>
              </div>
            </div>

            <button id="submitAnswerBtn">Submit answer</button>
          </>
        ) : 'Loading next quiz...'
      }
    </div>
  )
}


const mapStateToProps = state =>{
    return {
      newQuestion: state.quiz.newQuestion,
      newTrueAnswer: state.quiz.newTrueAnswer,
      newFalseAnswer: state.quiz.newFalseAnswer
    }
}


export default connect(mapStateToProps, {fetchQuiz})(Quiz);