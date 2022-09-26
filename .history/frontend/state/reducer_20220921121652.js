// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER } from './action-types'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_COUNTERCLOCKWISE:
    if( state === 5 ){
        return(state = 0)
      }
      else{ return state + 1} 
      case MOVE_CLOCKWISE:
       if( state === 0 ){
           return(state = 5)
         }
         else{ return state - 1} 
         
      default: return state}
}

const initialQuizState = {
  newQuestion:'Hello',
  newTrueAnswer:'?',
  newFalseAnswer:'??'
}
export function quiz(state = initialQuizState, action) {
  switch(action.type){
    case SET_QUIZ_INTO_STATE: 
    return {newQuestion: action.payload.question, newTrueAnswer: action.payload.answers[0].text, newFalseAnswer: action.payload.answers[1].text}
    default: return state}
}

const initialSelectedAnswerState = {
  selected: -1
}
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    case SET_SELECTED_ANSWER:
      console.log("HERE")
    return {selected: action.payload}
    default: return state}
}

const initialMessageState = ''
function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    
    default: return state}
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
function form(state = initialFormState, action) {
  switch(action.type){
    
          
  default: return state}
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })