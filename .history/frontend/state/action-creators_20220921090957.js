// ❗ You don't need to add extra action creators to achieve MVP
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE } from "./action-types"
import axios from "axios"

export function moveClockwise() { 
  return {type: MOVE_CLOCKWISE}}

export function moveCounterClockwise() {
  
  return {type: MOVE_COUNTERCLOCKWISE} }

export function selectAnswer() 
{ }

export function setMessage() 
{ }

export function setQuiz() 
{ }

export function inputChange() 
 { }

export function resetForm() 
{ }

// ❗ Async action creators
export function fetchQuiz(res){
  console.log("here")
  return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
    return {type:SET_QUIZ_INTO_STATE, payload:res}
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
