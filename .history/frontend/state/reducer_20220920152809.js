// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'

const initialWheelState = 0
function wheel(state = initialWheelState, action) {
  switch(action.type){
    case MOVE_CLOCKWISE:
      console.log("here")
    if( state === 0){
        return(state + 1)
      }
      else{ return state = 5} 
    default: return state}
}

const initialQuizState = null
function quiz(state = initialQuizState, action) {
  switch(action.type){
    
    default: return state}
}

const initialSelectedAnswerState = null
function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
    
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