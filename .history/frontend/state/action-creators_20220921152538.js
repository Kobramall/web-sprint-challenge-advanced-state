// ❗ You don't need to add extra action creators to achieve MVP
export const INPUT_CHANGE = 'INPUT_CHANGE'
import { CHANGE_INPUT, MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, RESET_FORM } from "./action-types"
import axios from "axios"

export function moveClockwise() { 
  return {type: MOVE_CLOCKWISE}}

export function moveCounterClockwise() {
  
  return {type: MOVE_COUNTERCLOCKWISE} }

export function selectAnswer(num) 
{
  return {type: SET_SELECTED_ANSWER, payload:num}
 }

export function setMessage(str) 
{
  return {type:SET_INFO_MESSAGE, payload:str}
}

export function setQuiz(quiz) 
{
  return {type:SET_QUIZ_INTO_STATE, payload: quiz}} 

export function inputChange() 
 { 
  return {type:INPUT_CHANGE}
}
export function change(str, id){
  console.log(str) 
  return{type:CHANGE_INPUT, payload: {str:str, id:id}}
}

export function resetForm() 
{
  return{ type:RESET_FORM}
 }

// ❗ Async action creators
export function fetchQuiz(){
 return function (dispatch) {
    // First, dispatch an action to reset the quiz state (so the "Loading next quiz..." message can display)
    // On successful GET:
    // - Dispatch an action to send the obtained quiz to its state
      dispatch(inputChange())
    axios.get(' http://localhost:9000/api/quiz/next')
     .then((res) => {const quiz = res.data;
    dispatch(setQuiz(quiz)) })
     .catch(err => console.error(err))
  
}
}
export function postAnswer(evt) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
      dispatch(resetForm)
    axios.post(`http://localhost:9000/api/quiz/new`)
        .then(res => console.log(res))
        .catch(err => console.error(err))
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
