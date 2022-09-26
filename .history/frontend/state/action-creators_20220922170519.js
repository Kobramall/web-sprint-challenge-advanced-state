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
export function postAnswer(num) {
  return function (dispatch) {
    // On successful POST:
    // - Dispatch an action to reset the selected answer state
    // - Dispatch an action to set the server message to state
    // - Dispatch the fetching of the next quiz
    const obj = {
      quiz_id: 'xywpi',
      answer_id: 'bxpcp'
    }
    
  axios.post(`http://localhost:9000/api/quiz/answer`, obj)
      .then(res => console.log(res))
      .catch(err => console.error(err))
      dispatch(selectAnswer(-1))
      dispatch(num === 0 ? setMessage('Nice job! That was the correct answer') : setMessage('What a shame! That was the incorrect answer'))
    }
    
}
export function postQuiz(str, str2, str3) {
  
  return function (dispatch) {
    // On successful POST:
    // - Dispatch the correct message to the the appropriate state
    // - Dispatch the resetting of the form
    
      const obj = {
        question_text: str,
        true_answer_text: str2,
        false_answer_text: str3
      }
    
    axios.post(`http://localhost:9000/api/quiz/new`, obj)
        .then(res => console.log(res))
        .catch(err => console.error(err))
        dispatch(resetForm())
        dispatch(setMessage('Congrats: "foobarbaz?" is a great question!'))
        dispatch(fetchQuiz())
      }
}
// ❗ On promise rejections, use log statements or breakpoints, and put an appropriate error message in state