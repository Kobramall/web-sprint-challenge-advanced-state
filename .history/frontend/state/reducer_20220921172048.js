// ❗ You don't need to add extra reducers to achieve MVP
import { combineReducers } from 'redux'
import { MOVE_CLOCKWISE, RESET_FORM, CHANGE_INPUT, MOVE_COUNTERCLOCKWISE, SET_QUIZ_INTO_STATE, SET_SELECTED_ANSWER, SET_INFO_MESSAGE, INPUT_CHANGE } from './action-types'

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
  question:'',
  trueAnswer:'',
  falseAnswer:'',
  isFetching: false,
  count:0
}
export function quiz(state = initialQuizState, action) {
  switch(action.type){
    case INPUT_CHANGE:
      return{isFetching:true}
    case SET_QUIZ_INTO_STATE: 
    return {question: action.payload.question, trueAnswer: action.payload.answers[0].text, falseAnswer: action.payload.answers[1].text, isFetching:false, count:1}
    default: return state}
}

const initialSelectedAnswerState = {
  selected: -1
}
export function selectedAnswer(state = initialSelectedAnswerState, action) {
  switch(action.type){
     case SET_SELECTED_ANSWER:  
     return {selected: action.payload}
    default: return state}
}

const initialMessageState = {
  message: ''
}
export function infoMessage(state = initialMessageState, action) {
  switch(action.type){
    case SET_INFO_MESSAGE:  
    return{message:action.payload}
    default: return state}
}

const initialFormState = {
  newQuestion: '',
  newTrueAnswer: '',
  newFalseAnswer: '',
}
export function form(state = initialFormState, action) {
  switch(action.type){
    case RESET_FORM:
      return{newQuestion:'', newTrueAnswer:'', newFalseAnswer:''}
    case CHANGE_INPUT:
      if(action.payload.id === "newQuestion"){
         return{newQuestion: action.payload.str}
      }
      else if(action.payload.id === "newFalseAnswer"){
        return{...state, newFalseAnswer: action.payload.str}
      }
      else if(action.payload.id === "newTrueAnswer"){
        return{...state, newTrueAnswer: action.payload.str}
      }
  default: return state}
}

export default combineReducers({ wheel, quiz, selectedAnswer, infoMessage, form })
