import {SAY_HELLO} from '../actions';

const helloReducer=(state={}, action)=>{
  switch(action.type){
    case SAY_HELLO:
      return {
        hello: action.payload
      }
    default:
      return state;
  }
}

export default helloReducer;