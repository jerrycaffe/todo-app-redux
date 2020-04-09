export const ON_CHANGE = "ON_CHANGE";
export const ADD_TODO = "ADD_TODO";
export const CLEAR_LIST = "CLEAR_LIST";
export const DELETE_ITEM = "DELETE_ITEM"
export const EDIT_ITEM = "EDIT_ITEM";
export const SAY_HELLO = "SAY_HELLO";


export const onChange = (payload)=>{
  return {
    type: ON_CHANGE,
    payload
  }
}

export const addTodo = (payload)=>{
  return {
    type: ADD_TODO,
    payload
  }
}

export const clearList=()=>{
  return{
    type: CLEAR_LIST
  }
}

export const deleteItem=(payload)=>{
  return {
    type: DELETE_ITEM,
    payload
  }
}

export const editItem=(payload)=>{
  return {
    type: EDIT_ITEM,
    payload
  }
}

export const sayHello=()=>{
  return {
    type: SAY_HELLO,
    payload: 'Hello How are you'
  }
}



