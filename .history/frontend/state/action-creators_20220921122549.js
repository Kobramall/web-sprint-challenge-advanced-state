// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from "./action-types"
import axios from "axios"

export function moveClockwise() { 
  return {type: MOVE_CLOCKWISE}}

export function moveCounterClockwise() {
  
  return {type: MOVE_COUNTERCLOCKWISE} }

export function selectAnswer(num) 
{ 
  return {type: SET_SELECTED_ANSWER, payload:num}
 }

export function setMessage() 
{ }

export function setQuiz(quiz) 
{
  return {type:SET_QUIZ_INTO_STATE, payload: quiz}} 

export function inputChange() 
 { }

export function resetForm() 
{return }

// ❗ Async action creators
export function fetchQuiz(){
 return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    
    axios.get(' http://localhost:9000/api/quiz/next')
     .then((res) => {const quiz = res.data;
    dispatch(setQuiz(quiz)) })
     .catch(err => console.error(err))
  
}
}
export function postAnswer() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
  }
}
export function postQuiz() {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
  }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state
